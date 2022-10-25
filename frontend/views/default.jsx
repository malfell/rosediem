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
                <link rel='stylesheet' href='style.css'/>
            </head>
            <body>
                {/* NAVBAR */}
                <nav>
                    {/* NAVBAR LINKS */}
                    {/* HOME */}
                    <li>
                        <a id="navHome" href='/'>RoseDiem Art Duels</a>
                    </li>
                    {/* RULES */}
                    <li>
                        <a href='/rules'>Rules</a>
                    </li>
                    {/* Attack Categorization */}
                    {/* <li>
                        <a href='/attack-categorization'>Attack Categorization</a>
                    </li> */}
                    {/* Point Calculator */}
                    {/* <li>
                        <a href='/calculator'>Point Calculator</a>
                    </li>                     */}
                    {/* PROFILES INDEX */}
                    <li>
                        <a href='/profiles'>Profiles</a>
                    </li>
                    {/* Register */}
                    <li>
                        <a href='/register'>Register</a>
                    </li>
                    {/* Login */}
                    <li>
                        <a href='/login'>Log In</a>
                    </li>
                </nav>

                {html.children}
            </body>
        </html>
    )
}

// exports
module.exports = Def