//import {useState} from 'react'

//importing express into project
const express = require("express")

//import path module
const path = require('path')

//define a PORT for our server to run locally
const PORT = 8000

//initlize an express application 
const app = express();

//host react app as static file
//makes build visible for user
app.use(express.static(path.resolve(__dirname, '../build')))

//define some routes
app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, '../build' , 'index.html'))
})

app.get('/api', (req, res)=>{
    //send message back to client
    //res.sendFile(path.resolve(___dirname, '../src/App.js' , 'index.html'))
    res.json({message: 'Waddup from the server!'})
})

const HTTPMETHODS = ["GET", "POST", "PUT", "PATCH", "DELETE"]

//Start app at PORT by listen()
app.listen(PORT, ()=>{
    console.log(`Server is listening on PORT ${PORT}`)
})