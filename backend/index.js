// Modules and Globals
// require express
const express = require('express');

// initialize the app after requiring express
const app = express()

// test homepage route
app.get('/', (req, res) => {
    res.send('Rosediem Art Duels')
})

// listen for connection
app.listen(3000, function(){
    console.log('sup')
})