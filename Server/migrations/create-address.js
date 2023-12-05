'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Address', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            placeId: {
                type: Sequelize.STRING,
            },
            area: {
                type: Sequelize.STRING
            },
            country: {
                type: Sequelize.STRING
            },
            city: {
                type: Sequelize.STRING
            },
            accommodation: {
                type: Sequelize.STRING
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Address');
    }
};