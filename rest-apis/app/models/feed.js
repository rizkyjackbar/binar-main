'use strict';
const {
  Model
} = require('sequelize');

const {v4: uuidv4} = require('uuid');

module.exports = (sequelize, DataTypes) => {
  class Feed extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Feed.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Feed',
  });

  Feed.beforeCreate(feed => feed.id = uuidv4())
  return Feed;
};