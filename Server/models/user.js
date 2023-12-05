'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [6, 20],
        notNull: {
          msg: 'Please enter your name'
        }
      }
    },
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    dob: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    phonenumber: DataTypes.INTEGER,
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profilePicture: DataTypes.STRING,
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};