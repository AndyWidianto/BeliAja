'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
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
      order_number: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM("pending", "paid", "processing", "shipped", "delivered", "cancelled", "refunded"),
        allowNull: false
      },
      payment_method_id: {
        type: Sequelize.UUID,
        references: {
          model: "payment_methods",
          key: "id"
        }
      },
      payment_status: {
        type: Sequelize.ENUM("unpaid", "paid", "failed", "refunded"),
        allowNull: false
      },
      shipping_address_id: {
        type: Sequelize.UUID,
        references: {
          model: "addresses",
          key: "id"
        }
      },
      shipping_cost: {
        type: Sequelize.INTEGER,
      },
      subtotal: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      discount: {
        type: Sequelize.INTEGER
      },
      total_amount: {
        type: Sequelize.INTEGER,
        allowNull: false  
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
    await queryInterface.dropTable('orders');
  }
};