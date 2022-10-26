// DEPENDENCIES
const React = require('react');
const Def = require('../default');

// SHOWS AN INDIVIDUAL PROFILE
function show (data) {
    return (
        <Def>
            <main>
                <h1>{data.profile.username}</h1>
                <img src={data.profile.pic} alt={data.profile.username}></img>
            </main>
        </Def>
    )
}

// EXPORT
module.exports = show;