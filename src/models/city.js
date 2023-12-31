'use strict'; 
// Model layer will access db directly
//created using command : npx sequelize model:generate --name City --attributes name:String
// to create city :  npx sequelize db:migrate
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  City.init({
    name: DataTypes.STRING ,
    unique : true
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};