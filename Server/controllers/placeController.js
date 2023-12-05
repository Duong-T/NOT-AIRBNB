const db = require("../models/index");
const { Clourinary } = require("../config/cloudinary");

const placeController = {
    //CREATE
    addNewPlace: async (req, res) => {
        try {
            //Create new place
            const newPlaces = new db.Place(req.body);

            //Save place
            const place = await newPlaces.save();
            res.status(200).json(place);
        } catch (err) {
            res.status(500).json(err.message);
        }

    },

    //UPDATE
    updatePlace: async (req, res) => {
        try {
            const updatePlace = await db.Place.update(req.body, { where: { id: req.params.id } });
            res.status(200).json(updatePlace);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }
}

module.exports = placeController;