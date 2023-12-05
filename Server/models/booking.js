'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Booking extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Booking.init({
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        placeId: DataTypes.STRING,
        userId: DataTypes.STRING,
        checkIn: DataTypes.DATE,
        checkOut: DataTypes.DATE,
        name: DataTypes.STRING,
        phone: DataTypes.INTEGER,
        price: DataTypes.FLOAT
    }, {
        sequelize,
        modelName: 'Booking',
    });
    return Booking;
};