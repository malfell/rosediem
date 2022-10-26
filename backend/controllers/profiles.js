// Dependencies
const router = require('express').Router()
const profiles = require('../models/profiles.js')

// ROUTES
// GET list of profiles
router.get('/', (req, res) => {
    res.render('profiles/index', { profiles })
})

// create new profile
router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
        req.body.pic = 'https://placekitten.com/200/200'
    }
    profiles.push(req.body)
    res.redirect('/profiles')
})

// show individual profile
router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!profiles[id]) {
        res.render('error404')
    }
    else {
        res.render('profiles/show', { profile: profiles[id]} )
    }
})

// export
module.exports = router