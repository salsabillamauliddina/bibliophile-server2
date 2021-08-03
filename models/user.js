'use strict';
const {hashPwd} = require('../helpers/bcrypt')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Book, {foreignKey:'UserId'})
    }
  };
  User.init({
    username:{
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty : {
          args : true,
          msg : `Username is required!`
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty : {
          args : true,
          msg : `Email is required!`
        },
        isEmail: {
          args: true,
          msg : `Must be email format!`
        }
      }
    },
    password:{
      type: DataTypes.STRING,
      validate: {
        notEmpty : {
          args : true,
          msg : `Password is required!`
        },
        len : {
          args: [6,8],
          msg: 'Password must be contains 6 - 8 characters!'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks : {
      beforeCreate : (user) => {
        user.password = hashPwd(user.password)
      }
    }
  });
  return User;
};