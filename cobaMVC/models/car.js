'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static async updateById(id, updatedData) {
      try {
        const car = await this.findByPk(id);
        if (!car) {
          throw new Error("Mobil tidak ditemukan");
        }
        await car.update(updatedData);
        return car;
      } catch (error) {
        throw error;
      }
    }

    static async getById(id) {
      try {
        const car = await this.findByPk(id);
        if (!car) {
          throw new Error("Mobil tidak ditemukan");
        }
        return car;
      } catch (error) {
        throw error;
      }
    }
  }
  Car.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    image: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    rentPerDay: DataTypes.FLOAT,
    description: DataTypes.TEXT,
    availableAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};
