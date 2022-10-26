// Dependencies
const router = require('express').Router()
const profiles = require('../models/profiles.js')

// ROUTES
// GET INDEX list of profiles
router.get('/', (req, res) => {
    res.render('profiles/index', { profiles })
})

// CREATE new profile
router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
        req.body.pic = 'https://placekitten.com/200/200'
    }
    profiles.push(req.body)
    res.redirect('/profiles')
})

// GET EDIT PROFILE PAGE
router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!profiles[id]) {
        res.render('error404')
    }
    else {
        res.render('profiles/edit', { profile: profiles[id], id: id })
    }
})

// SHOW individual profile
router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!profiles[id]) {
        res.render('error404')
    }
    // last "id" is to add the href value for the delete/edit button (accesses array index number)
    else {
        res.render('profiles/show', { profile: profiles[id], id} )
    }
})

// // EDIT PROFILE BY ID
router.put('/:id', (req, res) => {
    // res.send('PUT /profiles/:id stub')
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!profiles[id]) {
        res.render('error404')
    }
    else {
        profiles[id] = req.body
        res.redirect(`/profiles/${id}`)
    }
})

// DELETE PROFILE
router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!profiles[id]) {
        res.render('error404')
    } else {
        // delete from array
        profiles.splice(id, 1)
        res.redirect('/profiles')
        console.log(`You have deleted ${profiles[id].username}`)
    }
})




// export
module.exports = router