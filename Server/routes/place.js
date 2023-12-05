const router = require("express").Router();
const placeController = require("../controllers/placeController");

//Create
router.post("/newplace", placeController.addNewPlace);
//Update
router.put("/:id", placeController.updatePlace);
//Delete

//Get

//Get All



module.exports = router;