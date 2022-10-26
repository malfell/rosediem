// Dependencies
const React = require('react');
const Def = require('./default');

const messages = ["We're sorry. If this page exists, it ran away. :(", 
"I'm sorry! It looks like your web page is in another castle.", 
"Yikes, so this is the road less traveled by.",
"We're sorry! We got confused and have nothing to give you.",
"Wow! That link directory sure did fail."]

function randomMessage(messages){
    return messages[Math.floor(Math.random()*messages.length)];
};

function error404(){
    const errorMessage = randomMessage(messages);
    return (
        <Def>
            <main>
                <div className="box404">
                    <h1>404 Error</h1>
                    <p id="text404">{errorMessage}</p>
                </div>
                
            </main>
        </Def>
    )
}

// EXPORT
module.exports = error404