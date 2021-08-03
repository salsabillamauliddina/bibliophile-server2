'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book.belongsTo(models.User, {foreignKey: 'UserId'})
    }
  };
  Book.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty : {
          args : true,
          msg : `Title is required!`
        }
      }
    },
    author: {
      type: DataTypes.STRING,
      validate: {
        notEmpty : {
          args : true,
          msg : `Author is required!`
        }
      }
    },
    total_pages: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty : {
          args : true,
          msg : `Pages is required!`
        },
        isInt: {
          args: true,
          msg: 'Pages must be integer!'
        }
      }
    },
    rating: {
      type: DataTypes.INTEGER,
      validate: {
        isFloat: true,
        notEmpty : {
          args : true,
          msg : `Rating is required!`
        },
        min: {
          args: 1,
          msg: 'Rating min is 1!'
        },
        max: {
          args: 5,
          msg: 'Rating max is 5!'
        }
      }
    },
    start_read: {
      type: DataTypes.DATE,
      validate: {
        notEmpty : {
          args : true,
          msg : `Start read is required!`
        },
        isDate: {
          args: true,
          msg: 'It must be date format'
        }
      }
    },
    end_read: {
      type: DataTypes.DATE,
      validate: {
        notEmpty : {
          args : true,
          msg : `End read is required!`
        },
        isDate: {
          args: true,
          msg: 'It must be date format'
        }
      }
    },
    genre: {
      type:  DataTypes.STRING,
      validate: {
        notEmpty : {
          args : true,
          msg : `Genre is required!`
        }
      }
    },
    review: {
      type: DataTypes.STRING,
      validate: {
        notEmpty : {
          args : true,
          msg : `Review is required!`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};