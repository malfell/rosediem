// CHARACTER MODEL
// DEPENDENCIES
// must connect to mongoose database
const mongoose = require('mongoose')

// CHARACTER SCHEMA
let characterSchema = new mongoose.Schema({
    name: {type: String, required: true},
    avatar: {type: String, default: 'https://placekitten.com/200/200'},
    profile: {type: String},
    permissions: {type: String},
})

// EXPORT
module.exports = mongoose.model('Character', characterSchema)