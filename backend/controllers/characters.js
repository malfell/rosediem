// Dependencies
const router = require('express').Router()
// that one is only needed when profiles are an array (delete later)
// const profiles = require('../models/profiles.js')
// require the models folder and nickname it db to access the database
const db = require('../models')
const Character = require('../models/character.js')
const Profile = require('../models/profiles.js')



// SHOW SINGLE CHARACTER PAGE
router.get('/:id', (req, res) => {
    // res.send('GET characters/:id')
    Character.findById(req.params.id)
    .then(foundCharacter => {
        res.render('characters/show', {
            character: foundCharacter
        })
    })
    .catch(err => {
        res.render('error404')
    })
})

// TEST CREATE
// router.post('/', (req, res) => {
//     Character.create(req.body)
//     res.redirect('/')
// })

// CREATE CHARACTER PAGE
router.get('/new', (req, res) => {
    // res.send('GET /profiles/:id/characters/new')
    res.render('characters/new')
})


// EDIT CHARACTER
router.put('/character/:id', (req, res) => {
    res.send('PUT /profiles/:id/characters/:id')
})

// DELETE CHARACTER
router.delete('/character/:id', (req, res) => {
    res.send('GET characters/:characterId')
})

// GET EDIT CHARACTER PAGE
router.get('/character/:id/edit', (req, res) => {
    res.send('GET character edit form')
})

// EXPORT
module.exports = router