// Default View for Profiles--basically the profile navbar!!
// DEPENDECIES
const React = require('react');
const Def = require('../default');

function DefPro (html){
    return (
            <body>
                {/* NAVBAR */}
                <nav className="navProfile">
                    {/* NAVBAR LINKS */}
                    <ul className="navbarLinksProfile">
                        {/* HOME */}
                        <li className="navListProfile">
                            {/* <a id="navHome" href={`/profiles/${data.profile.id}`}>{data.profile.username}</a> */}
                        </li>
                        {/* RULES */}
                        <li className="navListProfile">
                            <a href='/rules'>Bio</a>
                        </li>
                        {/* PROFILES INDEX */}
                        <li className="navListProfile">
                            <a href='/profiles'>Permissions</a>
                        </li>
                        {/* Register */}
                        <li className="navListProfile">
                            <a href='/register'>Characters</a>
                        </li>
                        {/* Login */}
                        <li className="navListProfile">
                            <a href='/login'>Stats</a>
                        </li>                        
                    </ul>
                    
                </nav>

                {html.children}
            </body>

        
    )
}

// EXPORT
module.exports = DefPro