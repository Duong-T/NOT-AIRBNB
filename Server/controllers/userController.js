const db = require("../models/index");
const bcrypt = require("bcrypt");

const userController = {
    //GET USERS
    getUser: async (req, res) => {
        try {
            const user = await db.User.findOne({ where: { id: req.params.id }, });
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err.message);
        }
    },

    //UPDATE USER
    updateUser: async (req, res) => {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (error) {
                res.status(500).json(error);
            }
        }
        try {
            const avatar = req.file
            const userInfo = await db.User.update({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                dob: req.body.dob,
                phonenumber: req.body.phonenumber,
                profilePicture: avatar?.path
            }, {
                where: {
                    id: req.params.id
                }
            });
            res.status(200).json("User update")
        } catch (error) {
            res.status(500).json(error)
        }
    },


    //DELETE USER
    deleteUser: async (req, res) => {
        try {
            const user = await db.User.destroy({ where: { id: req.params.id } });
            res.status(200).json("User deleted");
        } catch (err) {
            res.status(500).json(err.message);
        }
    }
}

module.exports = userController