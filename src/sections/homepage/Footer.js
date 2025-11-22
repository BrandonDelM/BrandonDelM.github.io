import './Footer.css'
import Linkedkin from '../../assets/Linkedin.png'
import Github from '../../assets/Github.png'

function Footer(){
    return(
        <div className="Footer">
            <div className="Foottext">Brandon Del Mundo</div>
            <div className="Links">
                <a href="https://www.linkedin.com/in/brandon-dm/"><img src={Linkedkin} className="Links" alt="Linkedin"/></a>
                <a href="https://github.com/BrandonDelM"><img src={Github} className="Links" alt="Github"/></a>
            </div>
        </div>
    )
}

export default Footer;