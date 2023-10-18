'use strict';
const {
  Model
} = require('sequelize');

const {v4: uuidv4} = require('uuid');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: {
          msg: 'Please input correct email format'
        }
      }
    },
    encryptedPassword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING,
    role: {
      type: DataTypes.ENUM('SUPERADMIN', 'ADMIN', 'MEMBER'),
      allowNull: false,
      defaultValue: 'MEMBER'
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate(user => user.id = uuidv4())
  return User;
};