'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const Snail = require('./snail')
const Habitat = require('./habitat')

Snail.belongsTo(Habitat);
Habitat.hasMany(Snail);

module.exports = {Snail, Habitat}
