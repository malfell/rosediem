// DEPENDENCIES
const React = require('react');
const Def = require('../default');
const DefPro = require('./defaultPro')

// SHOWS AN INDIVIDUAL PROFILE
function show (data) {
    // SHOWS EMPTY IF NO CHARACTERS
    let characters = (
        <h3 className="inactive">
            No characters here.
        </h3>
    )

    // Logic for showing characters
    if (data.profile.characters.length) {
        characters = data.profile.characters.map(c => {
            return (
                <div className="border">
                    <h3>{c.name}</h3>
                    <img src={c.avatar} alt={c.name}></img>
                    <h5>Profile</h5>
                    <p>{c.profile}</p>
                    <h5>Permissions</h5>
                    <p>{c.permissions}</p>
                </div>
            )
        })
    }

    return (
        <Def>
            <main>
                <a href={`/profiles/${data.profile.id}`}><h1>{data.profile.username}</h1></a>
                <img className="thumbnail" src={data.profile.pic} alt={data.profile.username}></img>
                <p>{data.profile.info}</p>

                {/* BUTTONS */}
                <a href={`/profiles/${data.profile.id}/edit`} className="btn btn-warning">
                    Edit
                </a>
                <form method="POST" action={`/profiles/${data.profile.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>

                {/* CHARACTERS */}
                <h2>Characters</h2>
                {characters}
            </main>
        </Def>
    )
}

// EXPORT
module.exports = show;