const express = require('express')
const services = require('../services/render')
const route = express.Router()

route.get('/', services.homeRoute)

route.get('/add-user', services.add_user)

route.get('/update-user', services.update_user)

module.exports = route