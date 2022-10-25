// DEPENDENCIES
const React = require('react');
const Def = require('./default');

function login(){
    return (
        <Def>
            <main>
                <h1>Log In</h1>
                <form>
                    <container className='registration'>
                        {/* USERNAME */}
                        <div className='form-group'>
                            <label htmlFor='user'>Username</label>
                            <span aria-hidden="true" className="required-field">*</span>
                            <input className='form-control' type='text' placeholder='Username' id='username' name='username' required aria-describedby="required-description" />
                        </div>
                        {/* EMAIL */}
                        {/* Could there be a way to make it a choice if someone
                        logs in with email or username? */}
                        {/* <div className='form-group'>
                            <label htmlFor='email'>Email Address</label>
                            <span aria-hidden="true" className="required-field">*</span>
                            <input className='form-control' type='text' placeholder='Email' id='email' name='email' required aria-describedby="required-description"/>
                        </div> */}
                        {/* PASSWORD */}
                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <span aria-hidden="true" className="required-field">*</span>
                            <input className='form-control' type='password' placeholder='Password' id='password' name='password' required aria-describedby="required-description"/>
                        </div>
                        {/* SUBMIT BUTTON */}
                        <input type='submit' className='submit-button' value='Log In'/>                        
                    </container>
                    
                </form>
            </main>
        </Def>
    )
}

// EXPORT
module.exports = login;