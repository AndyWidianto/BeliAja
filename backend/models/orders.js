'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      orders.belongsTo(models.payment_methods, { foreignKey: "id", as: "payment_method" });
    }
  }
  orders.init({
    user_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};