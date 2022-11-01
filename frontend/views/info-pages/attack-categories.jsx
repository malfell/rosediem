// DEPENDECIES
const React = require('react');
const Def = require('../default');

// Rules Page
function attackCat () {
    return (
        <Def>
            <main>
                {/* Centered Page Heading */}
                <h1 style={{textAlign: "center"}}>Attack Categorization</h1>
                {/* Centered Page Description */}
                <p style={{textAlign: "center"}}>When you submit your piece of art, 
                you will be asked to select which categories it falls under. 
                Here are the categories we use and how we define them.</p>
                {/* Subheading for Category Type */}
                <h2>Attack Size</h2>

                {/* Category Option Heading */}
                <h3>Simple Shaped</h3>
                <p>A simple shaped character is a character that has 
                    little detail beyond simple shapes. Something like Kirby would 
                    count as simple-shaped, or a character that is simply a book or 
                    other object. This is worth five points.</p>

                {/* Category Option Heading */}
                <h3>Bust</h3>
                <p>A bust of a character is art that portrays the character from 
                    the shoulders up, offering little to no limb definition. 
                    This is worth 15 points.</p>

                {/* Category Option Heading  */}
                <h3>Half Body</h3>
                <p>A half body covers anything that has too much limb distinction 
                    to be a bust, but does not show the character below the knees, 
                    and so would not count as a full body. This is worth 25 points.</p>

                {/* Category Option Heading */}
                <h3>Full Body</h3>
                <p>A full body shows a character's whole body, or 
                    at least the vast majority of it. We count it as full body if 
                    the visibility cutoff point is below the character's knees. 
                    This is worth 50 points.</p>
                <hr />
                {/* Subheading for Category Type */}
                <h2>Lines</h2>

                {/* Category Option Heading */}
                <h3>Sketchy Lines</h3>
                <p>These include sketches where you can still see construction lines, 
                    or where the lines don't finish connecting. 
                    These don't earn any extra points.</p>

                {/* Category Option Heading */}
                <h3>Clean Lines or Lineless</h3>
                <p>These have either clean, polished lines without any construction 
                    lines, or are cleanly lineless (such as paintings). 
                    These are worth an extra 10 points.</p>
                
                <hr />
                {/* Subheading for Category Type */}
                <h2>Color</h2>

                {/* Category Option Heading */}
                <h3>Colorless</h3>
                <p>This describes images that do not have any color or distinct shades. 
                    These don't earn any extra points.</p>

                {/* Category Option Heading */}
                <h3>Partial Color</h3>
                <p>This describes images that are partially, but not fully, colored. 
                    Perhaps one or two distinct colors are used, but not every 
                    color loyal to the design. These are worth an extra 5 points.</p>

                {/* Category Option Heading */}
                <h3>Full Color</h3>
                <p>This describes an image that is fully colored, 
                    accurate to the design of the character. 
                    Tone-accurate greyscale and monochrome shades also count for this. 
                    These are worth an extra 10 points.</p>
                
                <hr />
                {/* Subheading for Category Type */}
                <h2>Shading</h2>

                {/* Category Option Heading */}
                <h3>No Shading</h3>
                <p>This describes images with no shading present. 
                    These are typically flat color pieces or colorless. 
                    They don't earn any extra points.</p>

                {/* Category Option Heading */}
                <h3>Partial Shading</h3>
                <p>This describes images where there is shading in a few places, 
                    but not throughout the whole piece. These earn 5 extra points.</p>

                {/* Category Option Heading */}
                <h3>Full Shading</h3>
                <p>This describes images where there is consistent shading throughout 
                    the piece. These earn 10 extra points.</p>

                <hr />
                {/* Subheading for Category Type */}
                <h2>Background</h2>

                {/* Category Option Heading */}
                <h3>None/Simple/Photograph</h3>
                <p>These images have either no background, 
                    or a very simple one such as a single color, 
                    or they have a photographed background that was not drawn. 
                    These do not earn any extra points.</p>

                {/* Category Option Heading  */}
                <h3>Prop/Item</h3>
                <p>These images have a prop or item or other background element, 
                    but do not create a full scene. Chairs, held items, or other 
                    singular scene elements would fall under this category. 
                    These earn 5 extra points.</p>

                {/* Category Option Heading */}
                <h3>Full Scene</h3>
                <p>These images contain a clear background and foreground, 
                    and have distinct settings. These earn 10 extra points.</p>
                
                <hr />
                {/* Subheading for Category Type */}
                <h2>Revenge</h2>
                <p>Revenging someone is when you draw a piece of art in return for a 
                    piece someone drew for you. A revenge piece earns 5 extra points. 
                    Chains do not have stacking bonuses - a level 3 revenge piece will 
                    still only get 5 extra points, not 15.</p>
                
                <hr />
                {/* Subheading for Category Type */}
                <h2>Recipeient with 3 or Less Attacks</h2>
                <p>If the person you are making a piece for has received three or fewer 
                    pieces of art <em>collectively</em> during the event, 
                    you will earn 10 extra points. This is to encourage attacking 
                    people who aren't receiving much art, and to branch out from the 
                    usual people you draw for a bit.</p>
                
                <hr />
                {/* Subheading for Category Type */}
                <h2>Own Character Included</h2>
                <p>If you include your own character in a piece of art you draw for 
                    someone else, that character earns half the points of that 
                    character's size. So a full body of your own OC would count as 
                    25 points, and so on.</p> 
            </main>
        </Def>
    )
}

// EXPORT
module.exports = attackCat