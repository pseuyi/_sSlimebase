'use strict';
var Sequelize = require('sequelize')
var db = require('APP/db')

module.exports = db.define('snails', {
  name: { 
  	type: Sequelize.STRING, 
  	allowNull: false },
  species: { 
  	type: Sequelize.STRING, 
  	allowNull: false },
  status: Sequelize.STRING,
  image: { 
  	type: Sequelize.STRING, 
  	defaultValue: '/images/default-snail.jpg' }
})

