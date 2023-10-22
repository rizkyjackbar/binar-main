"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Car.belongsTo(models.User, {
        foreignKey: {
          name: "createdBy",
          allowNull: true,
        },
      })

      Car.belongsTo(models.User, {
        foreignKey: {
          name: "updatedBy",
          allowNull: true,
        },
      })

      Car.belongsTo(models.User, {
        foreignKey: {
          name: "deletedBy",
          allowNull: true,
        },
      })
    }
  }
  Car.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.FLOAT,
      category: {
        type: DataTypes.ENUM(["Small", "Medium", "Large"]),
        defaultValue: "Medium",
      },
      isAvailable: {
        type: DataTypes.ENUM(["Available", "Not Available"]),
        defaultValue: "Available",
      },
      imageUrl: DataTypes.STRING,
      createdBy: DataTypes.INTEGER,
      updatedBy: DataTypes.INTEGER,
      deletedBy: DataTypes.INTEGER,
    },
    {
      sequelize,
      paranoid: true,
      modelName: "Car",
    }
  )
  return Car
}
