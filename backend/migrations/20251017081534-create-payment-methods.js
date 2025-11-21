'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('payment_methods', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('(UUID())'),
      },
      name: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.ENUM("bank_transfer", "e-wallet", "credit_cart", "cod", "qris"),
        allowNull: false
      },
      provider: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      logo_url: {
        type: Sequelize.STRING
      },
      is_active: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('payment_methods');
  }
};