const express = require('express')

const Router = express.Router()

Router.get('/ninjas', (req, res) => {
    res.send({method: 'GET'})
})

Router.post('/ninjas', (req, res) => {
    res.send({method: 'POST'})
})

Router.put('/ninjas/:id', (req, res) => {
    res.send({method: 'PUT'})
})

Router.delete('/ninjas/:id', (req, res) => {
    res.send({method: 'DELETE'})
})