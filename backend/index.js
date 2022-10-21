// Modules and Globals
// require dotenv
require('dotenv').config()
// require express
const express = require('express');


// initialize the app after requiring express
const app = express()

// test homepage route
app.get('/', (req, res) => {
    res.send('Rosediem Art Duels')
})

// 404 Stub
app.get('*', (req, res) => {
    res.status(404).send('404 not found')
})

// listen for connection
app.listen(process.env.PORT, () => {
    console.log(`sup from ${process.env.PORT}`)
})