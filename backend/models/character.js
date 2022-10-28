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
    // reference id of character
    // array of characters
    characters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Character' }]
})

// EXPORT
module.exports = mongoose.model('Character', characterSchema)