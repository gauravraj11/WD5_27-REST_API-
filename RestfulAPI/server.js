const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./routes/users')
const url = "mongodb+srv://gauravraj:Mongo%40raj11@cluster0.cddlpyx.mongodb.net/crud?retryWrites=true&w=majority&appName=Cluster0"

//created server
const app = express()

//mongodb connections
mongoose.connect(url)
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})


//middlewares
app.use(express.json())


//api endpoints
app.use('/users',userRouter)   // localhost:9000/users


//listening port
app.listen(9000, () => {
    console.log('Server started')
})


