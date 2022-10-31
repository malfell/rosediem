
// DEPENDENCIES
// mongoose must be required in all model files
const mongoose = require('mongoose');
// shorthand for schema
const { Schema } = mongoose;
// require character.js
const Character = require('./character.js')

// declare new Schema for profiles
// all fields must be declared with a type
const profileSchema = new Schema({
    username: { 
        type: String, 
        required: true, 
        minlength: [2, 'Username must be longer than 1 character.'],
        maxlength: [40, 'Username must be shorter than 40 characters.']  },
    email: { type: String, required: true},
    password: { 
        type: String, 
        required: true,
        minlength: [8, 'Password should be longer than 8 characters.']},
    birthday: { type: Date, required: true},
    pic: {type: String, default: 'https://placekitten.com/200/200'},
    info: String,
    joinDate: { type: Date, default: Date.now },
    // reference id of character
    // array of characters
    characters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Character' }]
    // must specify to schema that we want data to show up for virtual
})

// profileSchema virtual
// profileSchema.virtual('characters', {
//     // model's schema
//     ref: 'Profile',
//     // field of parent that matches child's ref field value
//     localField: '_id',
//     // ref field on child documents
//     foreignField: 'profile'
// })

// EXPORT MODEL
module.exports = mongoose.model('Profile', profileSchema)

// module.exports = [{
//     username: 'MouseDemon',
//     password: '123',
//     pic: 'https://placekitten.com/200/200',
//     info: '',
//     birthday: '10/10/1990'
// }, {
//     username: 'arias_hollow',
//     password: '456',
//     pic: 'https://placekitten.com/200/200',
//     info: '',
//     birthday: '10/10/1990',
// }, {
//     username: 'ghostable',
//     password: '789',
//     pic: 'https://placekitten.com/200/200',
//     info: '',
//     birthday: '10/10/1990',
// }]