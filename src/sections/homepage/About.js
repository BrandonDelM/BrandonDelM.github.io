import './Hero.css'
import './About.css'
import snippet from '../../assets/Codesnippet.png'

function About(){
    return(
        <div className="Hero-Main">
            <div className="Panel">
                <p className="hero-title">I want to use this website as an outlet for my projects and experimental ideas!</p>
                <p className="hero-paragraph">As I progress through my journey as a computer science undergraduate, I been really interested in seeking out any opportunity to apply my knowledge.</p>
                <p className="hero-paragraph">And as someone who is interested in Computer Science's interdisciplinary traits, I love to explore fields such as data science, cognitive science, electrical engineering, etc.</p>
                <p className="hero-paragraph">So whether it be <a href="https://github.com/BrandonDelM/GDCGJ2025">tampering with game making</a> or <a href="https://github.com/BrandonDelM/Tic-Tac-Two-Final">learning a new coding language</a>, I'm hopeful that this web page can be used as an outlet for new ideas and creations.</p>
            </div>
            <div className="Panel about-panel-wrapper" id="Panel-hover">
                <img src={snippet} alt="Code snippet" className="snippet"/>
                <p id="caption">A small GDScript code snippet I made during a Game Jam!</p>
            </div>
        </div>
    )
}

export default About;