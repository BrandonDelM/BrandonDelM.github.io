import './Footer.css'
import Linkedkin from '../assets/Linkedin.png'
import Github from '../assets/Github.png'

function Footer(){
    return(
        <div class="Footer">
            <div class="Foottext">Brandon Del Mundo</div>
            <div class="Links">
                <a href="https://www.linkedin.com/in/brandon-dm/"><img src={Linkedkin} class="Links" alt="Linkedin"/></a>
                <a href="https://github.com/BrandonDelM"><img src={Github} class="Links" alt="Github"/></a>
            </div>
        </div>
    )
}

export default Footer;