// DEPENDENCIES/IMPORTS
const React = require('react')
// remember TWO PERIODS!! This index is within another folder.
// Needs a second period to get out of that folder!!
const Def = require('../default')

function index (data) {
    // format data in the profiles array into HTML so page can display it
    let profilesFormatted = data.profiles.map((profile) => {
        return (
            <div>
                <h2>{profile.username}</h2>
                <img src={profile.profilePic} alt={profile.username} />
            </div>
        )
    })
    return (
    <Def>
        <main>
            <h1>Profiles Index</h1>
            {profilesFormatted}
        </main>
    </Def>  
    )

}

// EXPORT
module.exports = index