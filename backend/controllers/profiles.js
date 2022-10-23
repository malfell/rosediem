// Dependencies
const router = require('express').Router()

// ROUTES
// GET list of profiles
router.get('/', (req, res) => {
    res.render('profiles/index')
})

// export
module.exports = router