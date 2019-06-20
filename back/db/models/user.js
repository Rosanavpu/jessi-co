const S = require('sequelize');
const db = require('../db');

const User = db.define('users', {
  name: { 
    type: S.STRING,
    allowNull: false
  },
  lastname : {
      type: S.STRING,
      allowNull: false
  },
  email: {
    type:S.STRING,
    isEmail:true,
    allowNull: false
  },
  password:{
    type:S.STRING,
    allowNull:false
  },
  admin : {
      type : S.BOOLEAN
  }
})

module.exports = User
