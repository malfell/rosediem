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
                <p>Profile Info Here</p>

                {/* BUTTONS */}
                <a href={`/profiles/${data.id}/edit`} className="btn btn-warning">
                    Edit
                </a>
                <form method="POST" action={`/profiles/${data.id}?_method=DELETE`}>
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