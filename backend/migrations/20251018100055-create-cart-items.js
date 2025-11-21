'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cart_items', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('(UUID())'),
      },
      cart_id: {
        type: Sequelize.UUID,
        references: {
          model: "carts",
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
      qunatity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      subtotal: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      variant_id: {
        type: Sequelize.UUID,
        references: {
          model: "product_variants",
          key: "id"
        }
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
    await queryInterface.dropTable('cart_items');
  }
};