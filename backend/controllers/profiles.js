// Dependencies
const router = require('express').Router()

// ROUTES
// GET list of profiles
router.get('/', (req, res) => {
    let profiles = [{
        username: 'MouseDemon',
        profilePic: 'http://placekitten.com/250/250'
    },
    {
        username: 'Arias_Hollow',
        profilePic: 'http://placekitten.com/250/250'
    }
    ]
    res.render('profiles/index', { profiles })
})

// export
module.exports = router