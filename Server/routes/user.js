const router = require("express").Router();
const userController = require("../controllers/userController");
const middlewareController = require("../controllers/middlewareController");
const uploadCloud = require("../config/cloudinary");

//GET USERS
router.get("/:id", userController.getUser);

//UPDATE USER
router.put("/:id", uploadCloud.single('avatar'), userController.updateUser);

//DELETE USER
router.delete("/:id", middlewareController.vertifyTokenandAdminAuth, userController.deleteUser);


module.exports = router;