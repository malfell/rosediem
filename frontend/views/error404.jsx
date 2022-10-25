// Dependencies
const React = require('react');
const Def = require('./default');

function error404(){
    return (
        <Def>
            <main>
                <div className="box404">
                    <h1>404 Error</h1>
                    <p id="text404">We're sorry. If this page exists, it ran away. :( </p>
                </div>
                
            </main>
        </Def>
    )
}

// EXPORT
module.exports = error404