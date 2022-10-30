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



// EXPORT
module.exports = router