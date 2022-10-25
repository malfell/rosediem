// DEPENDENCIES
const React = require('react');
const Def = require('./default');

function register(){
    return (
        <Def>
            <main>
                <h1>Register</h1>
                <form>
                    <container className='registration'>
                        {/* USERNAME */}
                        <div className='form-group'>
                            <label htmlFor='email'>Username</label>
                            <input className='form-control' type='text' placeholder='Username' id='username' name='username' required />
                        </div>
                        {/* EMAIL */}
                        <div className='form-group'>
                            <label htmlFor='email'>Email Address</label>
                            <input className='form-control' type='text' placeholder='Email' id='email' name='email' required />
                        </div>
                        {/* CONFIRM EMAIL */}
                        <div className='form-group'>
                            <label htmlFor='emailConfirm'>Confirm Email Address</label>
                            <input className='form-control' type='text' placeholder='Confirm Email' id='emailConfirm' name='emailConfirm' required />
                        </div>
                        {/* PASSWORD */}
                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input className='form-control' type='password' placeholder='Password' id='password' name='password' required />
                        </div>
                        {/* CONFIRM PASSWORD */}
                        <div className='form-group'>
                            <label htmlFor='passwordConfirm'>Confirm Password</label>
                            <input className='form-control' type='password' placeholder='Confirm Password' id='passwordConfirm' name='passwordConfirm' required />
                        </div>
                        {/* BIRTHDATE */}
                        <div className='form-group'>
                            <label htmlFor='passwordConfirm'>Birthday</label>
                            <input className='form-control' type='date' placeholder='mm/dd/yyyy' id='birthday' name='birthday' required />
                            <p style={{color: 'gray', fontWeight: 'normal'}}>Your birthday will not be public.</p>
                        </div>
                        {/* SUBMIT BUTTON */}
                        <input type='submit' value='Register'/>                        
                    </container>
                    
                </form>
            </main>
        </Def>
    )
}

// EXPORT
module.exports = register;