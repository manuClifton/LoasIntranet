const mongoose = require('mongoose')
require('dotenv').config({path:'./.env'})

//const url = 'mongodb://127.0.0.1:27017/loas'
const url = process.env.MONGODB

mongoose.connect(url)

const db = mongoose.connection
    db.on('error', console.error.bind(console, 'Error al conectar a MongoDB'))
    db.once('open', function callback(){
        console.log('Conectados a Mongo DB')
    })

module.exports = db;