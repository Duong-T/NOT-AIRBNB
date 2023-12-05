const db = require("../models/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authController = {
    //REGISTER
    registerUser: async (req, res) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);

            //Create new user
            const username = await db.User.findOne({ where: { username: req.body.username } });
            if (username) {
                res.status(404).json({
                    message: 'Username had used!'
                })
            } else {
                const newUser = await db.User.create({
                    username: req.body.username,
                    password: hashed,
                });

                //Save user to DB
                const user = await newUser.save();
                const accessToken = authController.generateAccessToken(user);
                const refreshToken = authController.generateRefeshToken(user);
                res.cookie("refreshToken", refreshToken, {
                    httpOnly: true,
                    secure: false,
                    path: "/",
                    sameSite: "strict"
                })
                res.status(200).json({
                    user,
                    token: accessToken,
                    message: 'signup success'
                });
            }
        } catch (err) {
            res.status(500).json(err.message);
        }
    },

    // GENERATE ACCESS TOKEN
    generateAccessToken: (user) => {
        return jwt.sign(
            {
                id: user.id,
                isAdmin: user.isAdmin
            },
            process.env.JWT_ACCESS_KEY,
            { expiresIn: "30d" }
        );
    },
    // GENERATE REFRESH TOKEN
    generateRefeshToken: (user) => {
        return jwt.sign(
            {
                id: user.id,
                isAdmin: user.isAdmin
            },
            process.env.JWT_REFRESH_KEY,
            { expiresIn: "60d" }
        );
    },

    //LOGIN
    loginUser: async (req, res) => {
        try {
            const user = await db.User.findOne({ where: { username: req.body.username } });
            if (!user) {
                res.status(404).json({ message: "wrong username!" });
            }
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if (!validPassword) {
                res.status(404).json({ message: "wrong password!" });
            }
            if (user && validPassword) {
                const accessToken = authController.generateAccessToken(user);
                const refreshToken = authController.generateRefeshToken(user);
                res.cookie("refreshToken", refreshToken, {
                    httpOnly: true,
                    secure: false,
                    path: "/",
                    sameSite: "strict"
                })
                res.status(200).json({ user, token: accessToken, message: 'login success' });
            }
        } catch (err) {
            res.status(500).json(err.message);
        }
    },

    //REFRESH TOKEN
    requestRefreshToken: (req, res) => {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) return res.status(401).json("You're not authenticated");
        jwt.vertify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
            if (err) {
                console.log(err);
            }
            //Create new access token, refresh token
            const newAccessToken = authController.generateAccessToken(user);
            const newRefreshToken = authController.generateRefeshToken(user);
            res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                secure: false,
                path: "/",
                sameSite: "strict"
            });
            res.status(200).json({
                accessToken: newAccessToken,
                refreshToken: newRefreshToken
            });
        });
    },

    //LOG OUT
    logoutUser: async (req, res) => {
        //Clear cookies when user logs out
        res.clearCookie("refreshToken");
        refreshToken = refreshToken.filter((token) => token != req.cookies.refreshToken);
        res.status(200).json("logged out!");
    }
}

module.exports = authController;

