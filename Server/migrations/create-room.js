'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Room', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            placeId: {
                type: Sequelize.STRING,
            },
            typeroom: {
                type: Sequelize.STRING
            },
            bed: {
                type: Sequelize.STRING
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Room');
    }
};