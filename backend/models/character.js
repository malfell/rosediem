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
    // profile: {
    //     // need Schema.Types.ObjectID for a one-to-many-relationship
    //     type: Schema.Types.ObjectID,
    //     // refers to profile model
    //     ref: 'Profile'
    // }
})

// Create a model to use the schema and
// EXPORT
module.exports = mongoose.model('Character', characterSchema)