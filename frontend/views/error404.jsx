// Dependencies
const React = require('react');
const Def = require('./default');

function error404(){
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>get lost fool</p>
            </main>
        </Def>
    )
}

// EXPORT
module.exports = error404