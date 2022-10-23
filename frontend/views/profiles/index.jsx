// DEPENDENCIES/IMPORTS
const React = require('react')
// remember TWO PERIODS!! This index is within another folder.
// Needs a second period to get out of that folder!!
const Def = require('../default')

function index (){
    return (
    <Def>
        <main>
            <h1>Profiles Index</h1>
        </main>
    </Def>  
    )

}

// EXPORT
module.exports = index