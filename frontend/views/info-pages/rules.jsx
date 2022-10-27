// DEPENDECIES
const React = require('react');
const Def = require('../default');

// Rules Page
function rules () {
    return (
        <Def>
            <main>
                <h1 style={{textAlign: 'center'}}>RoseDiem Rules and Regulations</h1>
                <h2>Code of Conduct</h2>
                <ul>
                    <li>No discriminatory actions or language. This server is open to people of all races, backgrounds, orientations, gender identities, faiths, and ability.</li>
                    <li>Respect people's art permissions. Don't demand explanations for anything listed as a permission. If someone's permissions make you uncomfortable, simply don't draw for them. If there is something illegal or discrimniatory in the permissions, report the profile and it will be looked into. If someone goes against your permissions, please report it or contact an admod.</li>
                    <li>If someone asks you to take down a piece of art you made for them because it makes them uncomfortable for any reason, please comply. It exists on their profile page as much as yours, and is content of their character.</li>
                    <li>If you plan to participate, you must make at least one art piece. It could be a bust or colorless, but it needs to be somewhat clean lines and recognizable as the character. However, if you have received no art, then you will not be penalized for not making a piece. We want to avoid a situation where people join for free art and do not plan to give back. This rule may be removed when the server is larger or if enough people want it removed.</li>
                    <li>All art must be started and drawn during the event. You may gather references or plan art ahead of time, but do not start drawing until the event begins.</li>
                    <li>Do not use bases or trace art for your attacks. Pieces must be original.</li>
                    <li>The character you draw must be recognizable.</li>
                    <li>No sexual/NSFW attacks are allowed at this time. There are minors here. Characters wearing revealing clothing are allowed. Partial and full non-sexual nudity are allowed, but it must be censored and tagged with what it is.</li>
                    <li>Other banned themes are: incest, fetishes, child death, adult x minor ships (or pedophilia), zoophilia, and xenophobia.</li>
                    <li>For any art that must be censored, list the tags it involves. Your art must be censored if it contains:</li>
                        <ul>
                        <li>Gore (minor blood is okay)</li>
                        <li>Death</li>
                        <li>Body horror</li>
                        <li>Suggestive/sensual ship or non-ship art.</li>
                        <li>Partial non-sexual nudity</li>
                        <li>Full non-sexual nudity</li>
                        <li>Trypophobia (clusters of eyes or tiny holes or patterns)</li>
                        <li>Emetophobia (depictions of vomit or vomiting)</li>
                        <li>Entomophobia (realistic bug features, realistic spiders/insects)</li>
                        <li>Eyestrain, chromatic aberration, flashing/strobe effects.</li>
                        <li>Abuse (action violence is fine)</li>
                        <li>Self-harm</li>
                        </ul>
                    <li>All art styles and skill levels are welcome here. Do not be rude toward anyone’s art.</li>
                    <li>Revenges are not required. Do not ask/tell/pressure anyone to revenge you (unless it’s your friend, and you’re making a joke, but it needs to be clear).</li>
                    <li>This is not a rule, but we encourage taking a moment to thank people for their art.</li>
                </ul>

                <h2>Art Game Rules</h2>
                <ul>
                    <li>Either choose a team to represent or get randomly assigned to one. There will be three teams per event that you can choose from.</li>
                    <li> To earn your team points, select a character belonging to a user on one of the other two teams. Draw that character and submit your drawing - this is called 'attacking' the other team.</li>
                    <li>If you want to attack someone on your own team by drawing <em>them</em> art of their OC, you can! You will earn your team fewer points this way, but it's entirely legal.</li>
                    <li>People can draw any of your submitted OCs to earn their teams points. If you draw for someone who has drawn for you or vice versa, this is called Revenging a piece. Two people can trade art attacks multiple times to create a Revenge Chain.</li>
                    <li>How many points an attack earns is decided by the categories it fulfills - you will fill out which ones it does as part of the submission process. More information on which attack categories we use and how many points each is worth, please see the <a className="pageLinks" href="/attack-categorization">Attack Categories</a> page.</li>
                    <li>At the end of the event, points will be tallied for each team, and the team with the most points will be announced as the winner of the event.</li>
                </ul>
            </main>
        </Def>
    )
}

// EXPORT
module.exports = rules