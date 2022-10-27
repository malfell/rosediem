// Dependencies
const router = require('express').Router()
const profiles = require('../models/profiles.js')

// ROUTES
// GET INDEX list of profiles
router.get('/', (req, res) => {
    // res.render('profiles/index', { profiles })
    res.send('GET /profiles')
})

// CREATE new profile
router.post('/', (req, res) => {
    // console.log(req.body)
    // if (!req.body.pic) {
    //     req.body.pic = 'https://placekitten.com/200/200'
    // }
    // profiles.push(req.body)
    // res.redirect('/profiles')
    res.send('POST /places')
})

// The NEW PROFILE route is in the index page. It's the register route.

// SHOW individual profile
router.get('/:id', (req, res) => {
    // let id = Number(req.params.id)
    // if (isNaN(id)) {
    //     res.render('error404')
    // }
    // else if (!profiles[id]) {
    //     res.render('error404')
    // }
    // // last "id" is to add the href value for the delete/edit button (accesses array index number)
    // else {
    //     res.render('profiles/show', { profile: profiles[id], id} )
    // }
    res.send('GET /profiles/:id')
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