// DEPENDENCIES
const React = require('react');
const Def = require('../default');

// SHOWS AN INDIVIDUAL PROFILE
function show (data) {
    return (
        <Def>
            <main>
                <h1>{data.profile.username}</h1>
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
            </main>
        </Def>
    )
}

// EXPORT
module.exports = show;