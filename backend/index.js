// DEPENDENCIES
// require dotenv for access to .env file
require('dotenv').config()
// require express
const express = require('express');
// require method override so you use PUT/DELETE methods
const methodOverride = require('method-override');
// require mongoose
const mongoose = require('mongoose')

// initialize the app after requiring express
const app = express()

// mongoose can be called anywhere after the required mongoose
// The first argument that connect takes is the Mongo URI. 
// The second argument contains optional properties that get rid 
// of deprecation warnings.
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )

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
//body parser for decrypting data (like usernames)
//needs to go ABOVE the routers or you get undefined :(
app.use(express.urlencoded( {extended: true }));
// specify method after requiring method override
app.use(methodOverride('_method'));

// controller routes
app.use('/profiles', require('./controllers/profiles'))
app.use('/characters', require('./controllers/characters'))

// test homepage route
app.get('/', (req, res) => {
    res.render('home')
})

// Register new profile
app.get('/register', (req, res) => {
    res.render('profiles/register')
    // res.send('profiles/register')
})

// Log in
app.get('/login', (req, res) => {
    res.render('login')
})

// Rules Page
app.get('/rules', (req, res) => {
    res.render('info-pages/rules')
})

// Attack Categories Page
app. get('/attack-categories', (req, res) => {
    res.render('info-pages/attack-categories')
})


// 404 route
app.get('*', (req, res) => {
    res.render('error404')
})

// listen for connection
app.listen(process.env.PORT, () => {
    console.log(`sup from ${process.env.PORT}`)
})