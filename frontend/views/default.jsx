// DEPENDENCIES/IMPORTS
const React = require('react')

// default HTML page
function Def (html) {
    return (
        <html>
            <head>
                <title>RoseDiem Art Duels</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

// exports
module.exports = Def