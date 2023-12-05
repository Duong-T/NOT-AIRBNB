'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Place', {
            id: {
                allowNull: false,
                // autoIncrement: true,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4
            },
            ownerId: {
                type: Sequelize.STRING,
            },
            title: {
                type: Sequelize.STRING
            },
            photos: {
                type: Sequelize.ARRAY(Sequelize.STRING),
            },
            description: {
                type: Sequelize.TEXT,
            },
            parks: {
                type: Sequelize.ARRAY(Sequelize.STRING)
            },
            extraInfo: {
                type: Sequelize.STRING
            },
            checkIn: {
                type: Sequelize.DATE
            },
            checkOut: {
                type: Sequelize.DATE
            },
            maxGuests: {
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
        await queryInterface.dropTable('Place');
    }
};