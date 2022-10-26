// DEPENDENCIES
const React = require('react');
const Def = require('../default');

function register(){
    return (
        <Def>
            <main>
                <h1>Register</h1>
                <form method="POST" action="/profiles">
                    <container className='registration'>
                        {/* USERNAME */}
                        <div className='form-group'>
                            <label htmlFor='username'>Username</label>
                            <span aria-hidden="true" className="required-field">*</span>
                            <input className='form-control' type='text' placeholder='Username' id='username' name='username' required aria-describedby="required-description" />
                        </div>
                        {/* EMAIL */}
                        {/* <div className='form-group'>
                            <label htmlFor='email'>Email Address</label>
                            <span aria-hidden="true" className="required-field">*</span>
                            <input className='form-control' type='text' placeholder='Email' id='email' name='email' required aria-describedby="required-description"/>
                        </div> */}
                        {/* CONFIRM EMAIL */}
                        {/* <div className='form-group'>
                            <label htmlFor='emailConfirm'>Confirm Email Address</label>
                            <span aria-hidden="true" className="required-field">*</span>
                            <input className='form-control' type='text' placeholder='Confirm Email' id='emailConfirm' name='emailConfirm' required aria-describedby="required-description"/>
                        </div> */}
                        {/* PASSWORD */}
                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <span aria-hidden="true" className="required-field">*</span>
                            <input className='form-control' type='password' placeholder='Password' id='password' name='password' required aria-describedby="required-description"/>
                        </div>
                        {/* CONFIRM PASSWORD */}
                        {/* <div className='form-group'>
                            <label htmlFor='passwordConfirm'>Confirm Password</label>
                            <span aria-hidden="true" className="required-field">*</span>
                            <input className='form-control' type='password' placeholder='Confirm Password' id='passwordConfirm' name='passwordConfirm' required aria-describedby="required-description"/>
                        </div> */}
                        {/* BIRTHDATE */}
                        {/* <div className='form-group'>
                            <label htmlFor='passwordConfirm'>Birthday</label>
                            <span aria-hidden="true" className="required-field">*</span>
                            <input className='form-control' type='date' placeholder='mm/dd/yyyy' id='birthday' name='birthday' required aria-describedby="required-description"/>
                            <p style={{color: 'gray', fontWeight: 'normal'}}>Your birthday will not be public.</p>
                        </div> */}
                        {/* SUBMIT BUTTON */}
                        <input type='submit' className='submit-button' value='Register'/>                        
                    </container>
                    
                </form>
            </main>
        </Def>
    )
}

// EXPORT
module.exports = register;