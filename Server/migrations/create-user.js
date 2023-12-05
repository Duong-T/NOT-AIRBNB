'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('User', {
      id: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [6, 20], msg: 'Must be at least 6 character',
          notNull: {
            msg: 'Please enter your name'
          }
        }
      },
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      dob: {
        type: Sequelize.DATE
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
          isEmail: true, msg: 'Please enter a valid email'
        }
      },
      phonenumber: {
        type: Sequelize.INTEGER,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [8, 20],
          msg: 'Must be 8 characters or more'
        }
      },
      profilePicture: {
        type: Sequelize.STRING
      },
      isAdmin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('User');
  }
};