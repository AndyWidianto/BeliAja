'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class addresses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  addresses.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUID4
    },
    name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    complete_address: DataTypes.TEXT,
    province: DataTypes.STRING,
    city_or_district: DataTypes.STRING,
    subdistrict: DataTypes.STRING,
    postal_code: DataTypes.STRING,
    additional_notes: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'addresses',
  });
  return addresses;
};