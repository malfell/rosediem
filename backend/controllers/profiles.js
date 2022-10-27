// Dependencies
const router = require('express').Router()
// that one is only needed when profiles are an array (delete later)
// const profiles = require('../models/profiles.js')
// require the models folder and nickname it db to access the database
const db = require('../models')

// ROUTES
// GET INDEX list of profiles
router.get('/', (req, res) => {
    // get all items in the collection using Mongoose's find() method on the Profile model
    db.Profile.find()
        // then insert the profiles array
        .then((profiles) => {
            // and render the index page
            res.render('profiles/index', { profiles })
        })
        // catch any errors
        .catch(err => {
            console.log(err)
            res.render('error404')
        })
})

// CREATE new profile
router.post('/', (req, res) => {
    // use Mongoose's create() method and pass the req.body
    db.Profile.create(req.body)
        // When profile is created, redirect the user to appropriate page
        .then( () => {
            // probably a different page though. Home page? User's profile page?
            res.redirect('/profiles')
        })
        // catch any errors
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})

// The NEW PROFILE route is in the index page. It's the register route.

// SHOW individual profile
router.get('/:id', (req, res) => {
    // put the profile's id into Mongo's findById() method
    db.Profile.findById(req.params.id)
    // does this then() and catch() not need to be indented???
    // get correct profile and render it
    .then(profile => {
        res.render('profiles/show', { profile })
    })
    // catch any error
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
    // res.send('GET /profiles/:id')
})

// // EDIT PROFILE BY ID
router.put('/:id', (req, res) => {
    // let id = Number(req.params.id)
    // if (isNaN(id)) {
    //     res.render('error404')
    // }
    // else if (!profiles[id]) {
    //     res.render('error404')
    // }
    // else {
    //     profiles[id] = req.body
    //     res.redirect(`/profiles/${id}`)
    // }
    res.send('PUT /profiles/:id stub')
})

// DELETE PROFILE
router.delete('/:id', (req, res) => {
    // let id = Number(req.params.id)
    // if (isNaN(id)) {
    //     res.render('error404')
    // }
    // else if (!profiles[id]) {
    //     res.render('error404')
    // } else {
    //     // delete from array
    //     profiles.splice(id, 1)
    //     res.redirect('/profiles')
    //     console.log(`You have deleted ${profiles[id].username}`)
    // }
    res.send('DELETE /profiles/:id')
})

// GET EDIT PROFILE PAGE
router.get('/:id/edit', (req, res) => {
    // let id = Number(req.params.id)
    // if (isNaN(id)) {
    //     res.render('error404')
    // }
    // else if (!profiles[id]) {
    //     res.render('error404')
    // }
    // else {
    //     res.render('profiles/edit', { profile: profiles[id], id: id })
    // }
    res.send('GET edit form')
})

// CHARACTER ROUTES
// CHARACTER INDEX
// get list of a profile's  characters
router.get('/:id/characters', (req, res) => {
    res.send('GET /profiles/:id/characters')
})

// CREATE CHARACTER
router.post('/:id/characters', (req, res) => {
    res.send('GET /profiles/:id/characters')
})

// CREATE CHARACTER PAGE
router.get('/:id/characters/new', (req, res) => {
    res.send('')
})

// SHOW SINGLE CHARACTER PAGE
router.get('/:id/characters/:id', (req, res) => {
    res.send('GET /profile/:id/characters/:id')
})

// EDIT CHARACTER
router.put('/:id/characters/:id', (req, res) => {
    res.send('PUT /profiles/:id/characters/:id')
})

// DELETE CHARACTER
router.delete('/:id/characters/:characterId', (req, res) => {
    res.send('GET /profiles/:id/characters/:characterId')
})

// GET EDIT CHARACTER PAGE
router.get('/:id/characters/:id/edit', (req, res) => {
    res.send('GET character edit form')
})

// EXPORT
module.exports = router