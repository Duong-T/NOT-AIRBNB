'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Review extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Review.init({
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        placeId: DataTypes.STRING,
        rating: DataTypes.ARRAY(DataTypes.STRING),
        message: DataTypes.TEXT
    }, {
        sequelize,
        modelName: 'Review',
    });
    return Review;
};