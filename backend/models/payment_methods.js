'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class payment_methods extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  payment_methods.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING,
    provider: DataTypes.STRING,
    type: DataTypes.STRING,
    provider: DataTypes.STRING,
    description: DataTypes.STRING,
    logo_url: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'payment_methods',
  });
  return payment_methods;
};