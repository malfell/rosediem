// DEPENDENCIES
// require dotenv for access to .env file
require('dotenv').config()
// require express
const express = require('express');
// initialize the app after requiring express
const app = express()

// EXPRESS SETTINGS

// This changes the views directory path. 
// First arg is the "views" folder name. 
// Second arg is the file path that leads to views. 
    // Two dots because you're going out of the backend folder.
// If you don't change THIS, then the render function will look for the
// views folder in the backend get confused. :(
app.set('views', '../frontend/views');

// necessary for the jsx pages
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.set('public', '../frontend')
app.use(express.static('../frontend/public'))

// controller routes
app.use('/profiles', require('./controllers/profiles'))

// test homepage route
app.get('/', (req, res) => {
    res.render('home')
})

// Register new profile
app.get('/register', (req, res) => {
    res.render('register')
})

// 404 route
app.get('*', (req, res) => {
    res.render('error404')
})

// listen for connection
app.listen(process.env.PORT, () => {
    console.log(`sup from ${process.env.PORT}`)
})