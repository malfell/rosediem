// DEPENDENCIES/IMPORTS
const React = require('react')
// remember TWO PERIODS!! This index is within another folder.
// Needs a second period to get out of that folder!!
const Def = require('../default')

function index (data) {
    // format data in the profiles array into HTML so page can display it
    let profilesFormatted = data.profiles.map((profile) => {
        return (
            <div key={profile} className="profileList">
                <h3>
                    {/* change to profile.username to get link by username!! */}
                    <a className="indexNames" href={`/profiles/${profile.id}`}>
                        {profile.username}
                    </a> 
                </h3>
                <img className="thumbnail" src={profile.pic} alt={profile.username} />
            </div>
        )
    })
    return (
    <Def>
        <main>
            <h1>Profiles Index</h1>
            <p>This will eventually become a search function for profiles.</p>
            <div className="profileIndex">
                {profilesFormatted}
                               
            </div>

        </main>
    </Def>  
    )

}

// EXPORT
module.exports = index