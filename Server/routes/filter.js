const router = require("express").Router();
const filterController = require("../controllers/filterController");


//GET ALL FILTER
router.get("/get-all-filter", filterController.getAllFilter)

module.exports = router;