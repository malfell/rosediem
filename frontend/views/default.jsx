// DEPENDENCIES/IMPORTS
const React = require('react')

// default HTML page
function Def (html) {
    return (
        <html>
            <head>
                <title>RoseDiem Art Duels</title>
                {/* Bootstrap CDN link */}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
                {/* CSS Link */}
                {/* href MUST have the slash (/) or else it'll destroy all you love.
                 AKA, any nested folders (like in the profiles folder) won't get the styling */}
                <link rel='stylesheet' href='/style.css'/>
            </head>
            <body>
                {/* NAVBAR */}
                <nav>
                    {/* NAVBAR LINKS */}
                    <ul className="navBarLinks">
                        {/* HOME */}
                        <li className="navList">
                            <a id="navHome" href='/'>RoseDiem Art Duels</a>
                        </li>
                        {/* RULES */}
                        <li className="navList">
                            <a href='/rules'>Rules</a>
                        </li>
                        {/* Attack Categorization */}
                        {/* <li className="navList">
                            <a href='/attack-categorization'>Attack Categorization</a>
                        </li> */}
                        {/* Point Calculator */}
                        {/* <li className="navList">
                            <a href='/calculator'>Point Calculator</a>
                        </li>                     */}
                        {/* PROFILES INDEX */}
                        <li className="navList">
                            <a href='/profiles'>Profiles</a>
                        </li>
                        {/* Register */}
                        <li className="navList">
                            <a href='/register'>Register</a>
                        </li>
                        {/* Login */}
                        <li className="navList">
                            <a href='/login'>Log In</a>
                        </li>                        
                    </ul>
                    
                </nav>

                {html.children}
            </body>
        </html>
    )
}

// exports
module.exports = Def