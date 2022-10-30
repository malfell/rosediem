// DEPENDENCIES
const React = require('react');
const Def = require('../default');

function show (data) {
    return (
        <Def>
            <main>
                <container className="characterList">
                    <div>
                        <a href={`/characters/${data.character.id}`}><h1>{data.character.name}</h1></a>
                        {/* how to get user profile to be linked to?? */}
                        {/* <a href={`/profiles/${data.profile.id}`}><h3>{data.profile.name}</h3></a> */}
                    </div>
                    <div>
                        <img className="characterAvatar" src={data.character.avatar} alt={data.character.name}></img>
                    </div>
                    <div>
                        <h5>Profile</h5>
                        <p>{data.character.bio}</p>                        
                    </div>
                    <div>
                    <h5>Permissions</h5>
                    <p>{data.character.permissions}</p>
                    </div>
                </container>
 {/* BUTTONS */}
                {/* EDIT */}
                <a href={`/characters/${data.character.id}/edit`} className="btn btn-warning">
                    Edit
                </a>
                {/* NEW CHARACTER  */}
                {/* hiding this button for now because it's having issues */}
                {/* <a href={`/profiles/${data.profile.id}/characters/new`} className="btn btn-success">
                    Submit Character
                </a> */}
                {/* DELETE */}
                <form method="POST" action={`/characters/${data.character.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
            </main>
        </Def>
    )
}

// EXPORT
module.exports = show