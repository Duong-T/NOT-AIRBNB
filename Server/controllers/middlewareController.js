const jwt = require("jsonwebtoken");

const middlewareController = {

    //vertify token
    vertifyToken: (req, res, next) => {
        const token = req.headers.token;
        if (token) {
            //Bearer token
            const accessToken = token.split(" ")[1];
            jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
                if (err) {
                    res.status(403).json("Token is not valid");
                }
                req.user = user;
                next();
            });
        } else {
            res.status(401).json("You're not authenticated");
        }
    },

    vertifyTokenandAdminAuth: (req, res, next) => {
        middlewareController.vertifyToken(req, res, () => {
            if (req.user.id == req.params.id || req.user.isAdmin) {
                next();
            } else {
                res.status(403).json("You're not allow to do that!");
            }
        });
    }
}

module.exports = middlewareController;