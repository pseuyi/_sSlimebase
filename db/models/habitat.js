'use strict';
var Sequelize = require('sequelize')
var db = require('APP/db')

module.exports = db.define('habitats', {
  name: { type: Sequelize.STRING, allowNull: false },
  geo: Sequelize.STRING
})
