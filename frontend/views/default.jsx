// DEPENDENCIES/IMPORTS
const React = require('react')

// default HTML page
function Def (html) {
    return (
        <html>
            <head>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                {/* scales the website on mobile screen better */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>RoseDiem Art Duels</title>
                {/* Bootstrap CDN link */}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
                {/* CSS Link */}
                {/* href MUST have the slash (/) or else it'll destroy all you love.
                 AKA, any nested folders (like in the profiles folder) won't get the styling */}
                <link rel='stylesheet' href='/style.css'/>

                {/* ICON NOT WORKING??? */}
                {/* Added a free rose icon from https://icon-icons.com/icon/rose/38136  */}
                <link rel="icon" href="./assets/rose-icon-2.png" alt="rose icon"/>
            </head>
            <body>
                {/* NAVBAR */}
                <nav className="navbar mainNav">
                    <div className="container-fluid">
                        {/* NAVBAR LINKS */}
                        <ul className="navBarLinks">
                            {/* HOME */}
                            <li className="navList">
                                <a id="navHome" href='/'>RoseDiem Art Duels</a>
                            </li>
                            {/* RULES */}
                            <li className="navList">
                                <a className="navA" href='/rules'>Rules</a>
                            </li>
                            {/* Attack Categorization */}
                            <li className="navList">
                                <a className="navA" href='/attack-categories'><i className="fa-regular fa-user"></i>Attack Categories</a>
                            </li>
                            {/* Point Calculator */}
                            {/* <li className="navList">
                                <a className="navA" href='/calculator'>Point Calculator</a>
                            </li>                     */}
                            {/* PROFILES INDEX */}
                            <li className="navList">
                                <a className="navA" href='/profiles'>Profiles</a>
                            </li>
                            {/* Register */}
                            <li className="navList">
                                <a className="navA" href='/register'>Register</a>
                            </li>
                            {/* Login */}
                            <li className="navList">
                                <a className="navA" href='/login'>Log In</a>
                            </li>                        
                        </ul>
                    </div>
                    
                    
                </nav>

                {html.children}
            </body>
        </html>
    )
}

// exports
module.exports = Def