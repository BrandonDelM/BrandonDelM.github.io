import './Hero.css'
import './About.css'
import snippet from '../../assets/Codesnippet.png'

function About(){
    return(
        <div className="Hero-Main">
            <div className="Panel">
                <p className="hero-title">I want to use this website as an outlet for my projects and experimental ideas!</p>
                <p className="hero-paragraph">Whether it be tampering with game making or a coding language, I'm hopeful that this web page can be used as an outlet for new ideas and creations.</p>
                <p className="hero-paragraph">By scrolling through this website, you're already viewing my exploration of website development!</p>
                <p className="hero-paragraph">And along with new projects, I also want to use this website to also host past projects that have been left collecting dust. I find them to be great examples of my growth in coding over the years!</p>
            </div>
            <div className="Panel about-panel-wrapper" id="Panel-hover">
                <img src={snippet} alt="Code snippet" className="snippet"/>
                <p id="caption">A small GDScript code snippet I made during a Game Jam!</p>
            </div>
        </div>
    )
}

export default About;