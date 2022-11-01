// DEPENDENCIES/IMPORTS
const React = require('react')
const Def = require('./default')

function home (){
    return (
    <Def>
        <main>
            <h1>Rosediem Art Duels</h1>
        {/* Small Intro Quote */}
        <p style={{textAlign:"center"}}><em>Come, and duel with us to the death in this timeless garden.</em></p>
        
        {/* Brief bio on what we're about */}
        <p>Welcome to RoseDiem Art Duels! 
            We are a community of visual artists and writers who come here to trade 
            art with each other and chat about their original characters and the 
            creative process. We host a month-long art trade event - the Art Duels - 
            four times a year, during February, May, September, and November. 
            The rest of the year, we have mini-games and smaller art events you can 
            participate in as well as space for discussions. 
            All styles and skill levels are welcome, as we hope to be a space that 
            encourages experimentation and growth and the joy of art over mechanical 
            excellence.</p>
        </main>
    </Def>  
    )

}

// EXPORT
module.exports = home