const express = require('express')
const cors = require('cors')
require('dotenv').config({path:'./.env'})

const empleadoRouter = require('./routes/empleadoRouter')
const entidadRouter = require('./routes/entidadRouter')
const personaRouter = require('./routes/personaRouter')
const userRouter = require('./routes/userRouter')

const app = express()
const db = require('./database/db')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/empleados', empleadoRouter)
app.use('/entities', entidadRouter)
app.use('/personas', personaRouter)
app.use('/users', userRouter)


const port = process.env.PORT || 4000
app.listen(port, ()=>{
    console.log('Servidor corriendo en Puerto: '+ port +' http://localhost:4000')
})