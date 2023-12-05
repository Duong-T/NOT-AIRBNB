'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Filter', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            icon: {
                type: Sequelize.STRING
            },
            code: {
                type: Sequelize.STRING
            },
            placeId: {
                type: Sequelize.ARRAY(Sequelize.STRING),
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Filter');
    }
};