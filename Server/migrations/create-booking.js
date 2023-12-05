'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Booking', {
            id: {
                allowNull: false,
                // autoIncrement: true,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4
            },
            placeId: {
                type: Sequelize.STRING,
            },
            userId: {
                type: Sequelize.STRING
            },
            checkIn: {
                type: Sequelize.DATE
            },
            checkOut: {
                type: Sequelize.DATE
            },
            name: {
                type: Sequelize.STRING
            },
            phone: {
                type: Sequelize.INTEGER
            },
            price: {
                type: Sequelize.FLOAT
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
        await queryInterface.dropTable('Booking');
    }
};