'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Invoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Invoice.associate = models => {
        Invoice.belongsTo(models.Customer)
        Invoice.belongsTo(models.Discount)
      }
    }
  }
  Invoice.init({
    initialCost: DataTypes.INTEGER,
    finalCost: DataTypes.FLOAT,
    product: DataTypes.STRING,
    CustomerId: DataTypes.INTEGER,
    DiscountId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Invoice',
  });
  return Invoice;
};