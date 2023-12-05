const db = require('../models/index');

const filterController = {
    getAllFilter: async (req, res) => {
        try {
            const filter = await db.Filter.findAll({
                attributes: [
                    'id', 'name', 'icon', 'code'
                ]
            })
            res.status(200).json(filter)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}

module.exports = filterController;