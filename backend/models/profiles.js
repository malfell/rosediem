
// DEPENDENCIES
// mongoose must be required in all model files
const mongoose = require('mongoose')

// declare new Schema for profiles
// all fields must be declared with a type
const profileSchema = new mongoose.Schema({
    username: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
    birthday: { type: Date, required: true},
    pic: {type: String, default: 'https://placekitten.com/200/200'},
    info: String,
})

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