// CREATE A NEW CHARACTER

// WHY DOES THIS ONE NOT SUBMIT RIGHT??? 

// DEPENDENCIES
const React = require('react');
const Def = require('../default');

// add data parameter to pass in error messages
function editCharacter(data){
    // ERROR MESSAGE
    // starts with empty string
    let message = ''
        // if there is an error, then bring up alert
        if (data.message) {
            message = (
                <h4 className='alert-danger'>
                    {data.message}
                </h4>
            )
        }
    return (
        <Def>
            <main>
                <h1>Edit Character</h1>
                {message}
                <form method="POST" action={`/profiles/${data.id}/character`}>
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
module.exports = editCharacter;