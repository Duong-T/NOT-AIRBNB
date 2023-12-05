'use strict';
const {
    Model
} = require('sequelize');
const user = require('./user');
module.exports = (sequelize, DataTypes) => {
    class Place extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Place.init({
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        ownerId: DataTypes.STRING,
        title: DataTypes.STRING,
        photos: DataTypes.ARRAY(DataTypes.STRING),
        description: DataTypes.TEXT,
        parks: DataTypes.ARRAY(DataTypes.STRING),
        extraInfo: DataTypes.STRING,
        checkIn: DataTypes.DATE,
        checkOut: DataTypes.DATE,
        maxGuests: DataTypes.INTEGER,
        price: DataTypes.FLOAT
    }, {
        sequelize,
        modelName: 'Place',
    });
    return Place;
};