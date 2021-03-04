const express = require('express')

const Router = express.Router()

const Ninja = require('../models/ninja')

Router.get('/ninjas', (req, res, next) => {
    
    // Ninja.find({}).then(function(ninja) {

    //     res.send(ninja)

    // })

    Ninja.geoNear(
        {type:'Points', coordinates:[parseFloat(req.query.lng), parseFloat(req.query.lat)]},
        { maxDistance:100000, spherical:true}).then(function(ninjas) {
        res.send(ninjas)
    })
})

Router.post('/ninjas', (req, res, next) => {

    Ninja.create(req.body).then( ninja => {
        
        res.send(ninja)

    }).catch(next)
    

})

Router.put('/ninjas/:id', (req, res, next) => {

    const id = req.params.id 

    Ninja.findByIdAndUpdate({_id: id}, req.body).then(function(){

        Ninja.where({_id: id}).then(function(ninja) {
            res.send(ninja)
        }).catch(function(err){ console.log(err)})

    })

})

Router.delete('/ninjas/:id', (req, res, next) => {

    const id = req.params.id

    Ninja.findByIdAndRemove({_id:id })

        .then(function(ninja){

            res.send(ninja)

        })

})

module.exports = Router