// DEPENDENCIES
const React = require('react');
const Def = require('../default');
// const DefPro = require('./defaultPro')

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
                <container key={c} className="characterList">
                    <div>
                        <a href={`/characters/${c.id}`}><button className="btn btn-info characterButton">{c.name}</button></a>
                    </div>
                    <div>
                        <img className="characterAvatar" src={c.avatar} alt={c.name}></img>
                    </div>
                </container>
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
                {/* EDIT */}
                <a href={`/profiles/${data.profile.id}/edit`} className="btn btn-warning">
                    Edit
                </a>
                {/* NEW CHARACTER  */}
                {/* hiding this button for now because it's having issues */}
                <a href={`/profiles/${data.profile.id}/characters/new`} className="btn btn-success">
                    Submit Character
                </a>
                {/* DELETE */}
                <form method="POST" action={`/profiles/${data.profile.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>

                {/* CHARACTERS */}
                <h2>Characters</h2>
                <div className="formattedCharacters">{characters}</div>


                <h1>Submit New Character</h1>
                <form method="POST" action={`/profiles/${data.profile.id}/character`}>
                    <container className='registration'>
                        {/* CHARACTER NAME */}
                        <div className='form-group'>
                            <label htmlFor='name'>Character Name </label>
                            <input className='form-control' type='text' placeholder='Character Name' id='name' name='name' required aria-describedby="required-description" />
                        </div>
                        {/* AVATAR */}
                        <div className='form-group'>
                            <label htmlFor='avatar'>Avatar</label>
                            <input className='form-control' type='text' placeholder='Avatar Link' id='avatar' name='avatar'/>
                        </div>
                        {/* PROFILE */}
                        <div className='form-group'>
                            <label htmlFor='bio'>Bio</label>
                            {/* <textarea cols='3' rows='3'
                            className='form-control' id='profile' name='profile'
                            /> */}
                            <input className='form-control' type='text' placeholder='bio' id='bio' name='bio'/>
                        </div>
                        {/* PERMISSIONS */}
                        <div className='form-group'>
                            <label htmlFor='permissions'>Permissions</label>
                            {/* <textarea cols='3' rows='3'
                            className='form-control' id='permissions' name='permissions'
                            /> */}
                            <input className='form-control' type='text' placeholder='permissions' id='permissions' name='permissions'/>
                        </div>
                        {/* SUBMIT BUTTON */}
                        <input type='submit' className='submit-button' value='Submit Character'/>                        
                    </container>
                    
                </form>
            </main>
        </Def>
    )
}

// EXPORT
module.exports = show;