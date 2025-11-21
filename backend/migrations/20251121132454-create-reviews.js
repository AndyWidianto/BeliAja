'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reviews', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('(UUID())'),
      },
      user_id: {
        type: Sequelize.UUID,
        references: {
          model: "users",
          key: "id"
        }
      },
      product_id: {
        type: Sequelize.UUID,
        references: {
          model: "products",
          key: "id"
        }
      },
      ranting: {
        type: Sequelize.INTEGER
      },
      name_variant: {
        type: Sequelize.STRING,
        allowNull: false
      },
      comment: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('reviews');
  }
};