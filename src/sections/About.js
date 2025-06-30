import './Hero.js'
import './About.css'
import snippet from '../assets/Codesnippet.png'

function About(){
    return(
        <div class="Hero-Main">
            <div class="Panel">
                <p id="Text">I want to use this website as an outlet for my projects and experimental ideas!</p>
                <p id="paragraph">Whether it be tampering with game making or a coding language, I'm hopeful that this web page can be used as an outlet for new ideas and creations.</p>
                <p id="paragraph">By scrolling through this website, you're already viewing my exploration of website development!</p>
                <p id="paragraph">And along with new projects, I also want to use this website to also host past projects that have been left collecting dust. I find them to be great examples of my growth in coding over the years!</p>
            </div>
            <div class="Panel" id="Panel-hover">
                <img src={snippet} alt="Code snippet" class="snippet"/>
                <p id="caption">A small GDScript code snippet I made during a Game Jam!</p>
            </div>
        </div>
    )
}

export default About;