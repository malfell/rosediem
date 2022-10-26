// DEPENDECIES
const React = require('react');
const Def = require('../default');

// Edit your Profile
// insert data into function since we must access the data of the current profile
function edit_profile(data) {
    return (
        <Def>
            <main>
                <h1>Edit Profile</h1>
                {console.log(data)}
                {/* THIS ONE needs to be data.id? For some reason? Not data.profile.id? */}
                <form method='POST' action={`/profiles/${data.id}?_method=PUT`}>
                    <container className='registration'>
                        {/* PROFILE PIC */}
                        <div className='form-group'>
                            <label htmlFor='pic'>Profile Picture</label>
                            <input className='form-control' type='text' defaultValue={data.profile.pic} id='pic' name='pic' />
                        </div>                        
                        {/* USERNAME */}
                        <div className='form-group'>
                            <label htmlFor='username'>Username</label>
                            <input className='form-control' 
                            type='text' 
                            defaultValue={data.profile.username} 
                            id='username' 
                            name='username'
                            required  />
                        </div>

                        {/* BIRTHDATE */}
                        <div className='form-group'>
                            <label htmlFor='passwordConfirm'>Birthday</label>
                            <input className='form-control' type='date' defaultValue={data.profile.birthday} id='birthday' name='birthday' required aria-describedby="required-description"/>
                            <p style={{color: 'gray', fontWeight: 'normal'}}>Your birthday will not be public.</p>
                        </div>
                        {/* Info */}
                        <div className='form-group'>
                            <label htmlFor='info'>Info</label>
                            <textarea cols='3' rows='3'
                            className='form-control' type='textarea' defaultValue={data.profile.info} id='info' name='info'/>
                        </div>
                        {/* SUBMIT BUTTON */}
                        <input className='submit-button' type='submit' value='Save Changes'/>                        
                    </container>
                </form>
            </main>
        </Def>
    )
}

// EXPORT
module.exports = edit_profile