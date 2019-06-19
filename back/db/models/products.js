const S = require('sequelize');
const Category = require('./category')
const db = require('../db');

const Product = db.define('products', {
  name: {
    type: S.STRING,
    allowNull: false,
  },
  price: {
    type: S.INTEGER,
    allowNull: false,
  },
  stock: {
    type: S.INTEGER, 
  },
  description: {
    type : S.TEXT
  },
  images: {
    type : S.STRING
  },
  reviews : {
    type : S.ARRAY(S.STRING)
  },
  rating : {
    type : S.INTEGER
  }
})

Product.hasMany(Category)


module.exports = Product
