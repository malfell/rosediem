// CHARACTER MODEL
// DEPENDENCIES
// must connect to mongoose database
const mongoose = require('mongoose')
// shorthand for the Schema constructor
const { Schema } = mongoose

// CHARACTER SCHEMA
let characterSchema = new Schema({
    name: {type: String, required: true},
    avatar: {type: String, default: 'https://placekitten.com/200/200'},
    bio: {type: String},
    permissions: {type: String},
    owner: {type: String},
})

// Create a model to use the schema and
// EXPORT
module.exports = mongoose.model('Character', characterSchema)