// This is the file that connects to Mongoose
// DEPENDENCIES
// require dotenv in order to use MONGO_URL variable--need to seed into the database
require('dotenv').config();
const mongoose = require('mongoose');



// establish connection
// useNewUrlParser and useUnifiedTopology are optional, but they'll
// remove warning messages from the terminal
// More info here: https://arunrajeevan.medium.com/understanding-mongoose-connection-options-2b6e73d96de1
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// EXPORT MODELS
module.exports.Profile = require('./profiles')
module.exports.Character = require('./character')