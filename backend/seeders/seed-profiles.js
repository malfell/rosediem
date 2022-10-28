// DEPENDENCIES
// require models folder so we can access the database
const db = require('../models/index.js')

// To run seeder file, enter this in the backend terminal: 
    // node seeders/seed-profiles.js

// use Mongoose's create() method on Profile to make a new profile
// Pass in an array to create multiple profiles.
db.Profile.create([{
    username: 'MouseDemon',
    email: 'fake@email.com',
    password: '123456789',
    birthday: '10/10/1990',
    pic: 'https://placekitten.com/200/200',
    info: '',

}, {
    username: 'arias_hollow',
    email: 'fake@email.com',
    password: '123456789',
    birthday: '10/10/1990',
    pic: 'https://placekitten.com/200/200',
    info: '',
}, {
    username: 'ghostable',
    email: 'fake@email.com',
    password: '123456789',
    birthday: '10/10/1990',
    pic: 'https://placekitten.com/200/200',
    info: '',
}, {
    username: 'ohmybears',
    email: 'fake@email.com',
    password: '123456789',
    birthday: '10/10/1990',
    pic: 'https://placekitten.com/200/200',
    info: '',
}, {
    username: 'reibellion',
    email: 'fake@email.com',
    password: '123456789',
    birthday: '10/10/1990',
    pic: 'https://placekitten.com/200/200',
    info: '',
}, {
    username: 'solocoffeecup',
    email: 'fake@email.com',
    password: '123456789',
    birthday: '10/10/1990',
    pic: 'https://placekitten.com/200/200',
    info: '',
}, 
{
    username: 'skellingaton',
    email: 'fake@email.com',
    password: '123456789',
    birthday: '10/10/1990',
    pic: 'https://placekitten.com/200/200',
    info: '',
}])
// logic for when create() resolves for fails
.then(() => {
    console.log('Profiles created!')
    // this file will be ran like a script, so need to call process.exit()
    // so that the script doesn't just hang open like a web server does
    process.exit()
})
.catch(err => {
    console.log('Profiles failed to create. :( ', err)
    process.exit()
})