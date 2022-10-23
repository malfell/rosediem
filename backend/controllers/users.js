// Dependencies
const router = require('express').Router()

// ROUTES
router.get('/', (req, res) => {
    res.send('GET /users')
})

// export
module.exports = router