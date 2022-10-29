// SEED CHARACTERS
const db = require('../models')

// must know id of the profile we're placing characters on
async function seed() {
    // get the profile
    let profile = await db.Profile.findOne({ username: 'MouseDemon' })

    // create fake sample character
    let character = await db.Character.create({
        name: 'Cassius Waters',
        avatar: 'https://placekitten.com/200/200',
        profile: 'Here is info about Cassius.',
        permissions: 'Be good.'
    })

    // Add comment to the profile's character array
    profile.characters.push(character.id)

    // save the profile now that it has a character
    await profile.save()
    console.log('Characters seeded!')
    // exit the program
    process.exit()
}

seed()