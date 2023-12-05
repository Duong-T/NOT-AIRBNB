const router = require("express").Router();
const authController = require("../controllers/authController");
const middlewareController = require("../controllers/middlewareController");

//REGISTER
router.post("/register", authController.registerUser);
//LOGIN
router.post("/login", authController.loginUser);
//REFRESH TOKEN
router.post("/refresh", authController.requestRefreshToken);

//LOG OUT
router.post("/logout", middlewareController.vertifyToken, authController.logoutUser);
module.exports = router;