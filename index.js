const express = require('express')

const app = express()

const bodyParser = require('body-parser')

const mongoose = require('mongoose')

const uri = require('./key')

const PORT = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(express.static('public'))
// CONNECTING TO DATABASE
mongoose.connect('mongodb://localhost/thenetninja',{ useNewUrlParser: true, useUnifiedTopology: true}).then( response => {

    console.log('DB CONNECTED SUCCESSFULLY', )

}).catch(err => console.log('err', err))

// INITIALIZE ROUTE
app.use('/api', require('./routes/app'))

// mongoose error 
app.use(function(err, req, res, next) {
    
    res.status(422).send({ error: err.message})
})

app.listen(PORT, ()=> {

    console.log('App is listening at', PORT)

})