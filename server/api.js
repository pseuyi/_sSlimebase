'use strict'
const api = require('express').Router()
const db = require('APP/db')
const Snail = require('../db/models/snail')
const Habitat = require('../db/models/habitat')

api.get('/hello', (req, res) => res.send({hello: 'world'}))


api.get('/snails', (req, res, next)=>{
	Snail.findAll({})
	.then((snails)=>{
		res.json(snails)
	})
	.catch(next)
})

api.post('/snails', (req, res, next)=>{
	console.log('creating new snail with this info: ', req.body)
	Snail.create(req.body)
	.then((newSnail)=>{
		res.json(newSnail)
	})
	.catch(next)
})

api.put('/snails/:id', (req, res, next)=>{
	Snail.findById(req.params.id)
	.then((foundSnail)=>{
		foundSnail.update(req.body)
	})
	.then((updatedSnail)=>{
		res.Json(updatedSnail)
	})
	.catch(next)
})

// HABITAT ROUTES //

api.get('/habitats', (req, res, next)=>{
	Habitat.findAll({})
	.then((habitats)=>{
		res.json(habitats)
	})
	.catch(next)
})

api.post('/habitats', (req, res, next)=>{
	Habitat.create(req.body)
	.then((newHab)=>{
		res.json(newHab)
	})
	.catch(next)
})

api.get('/habitats/:id', (req, res, next)=>{
	Habitat.findById(req.params.id)
	.then((foundHab)=>{
		res.json(foundHab)
	})
	.catch(next)
})

api.put('/habitats/:id', (req, res, next)=>{
	Habitat.findById(req.params.id)
	.then((foundHab)=>{
		foundHab.update(req.body)
	})
	.then((updatedHab)=>{
		res.Json(updatedHab)
	})
	.catch(next)
})

module.exports = api

