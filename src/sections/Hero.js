import './Hero.css';
import Brandon from '../assets/Brandon.png';

function Hero(){
    return(
        <div class="Hero-Main"> 
            <div class="Panel" id="Slideinleft">
                <img src={Brandon} alt="Brandon" class="Brandon"/>
            </div>
            <div class="Panel" id="Slideinright">
                <div id="Text">
                    This is my work in progress web page made in React.js!
                </div>
                <div>
                    <p id="paragraph">I'm a Computer Science and Engineer B.S. major and a Cognitive Science B.S. minor at the University of California, Merced.</p>
                    <p id="paragraph">I'm the current leader of logistics at <a href="https://hackmerced.com/">HackMerced</a>, a hackathon organization and a web intern in the student branch of the <a href="https://saseucm.org/">Society of Asian Scientists and Engineers</a>, both located in UC Merced!</p>
                    <p id="paragraph">I'm seeking hands-on application of the skills I've learned to create new opportunities and potential internships right now and beyond.</p>
                    <p id="paragraph">In my free time, I love to create and listen to music. Alongside music, I enjoy participating in the UC Merced community through joining student clubs and participating in events that happen during the school year.</p>
                </div>
            </div>
        </div>
    )
}

export default Hero;