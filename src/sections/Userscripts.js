import './userscriptspage/Userscripts.css'

import Header from './homepage/Header.js'

const test = `(function() {
  'use scrict';

  window.addEventListener("load", function () {
    const titleElement = document.getElementsByClassName("tracklist_total");
    if (titleElement[0].innerText){
        const title = titleElement[0].innerText

        let p = document.createElement("p")
        p.innerText = title

      const styles = {
            fontSize: '20px',
            color: 'white',
             maxWidth: '100vw',
            margin: 'auto',
            opacity: '50%'

      }

      Object.assign(p.style, styles)

        document.querySelector(".album_title").append(p)
      }
  }, false)
})();`

function Userscripts() {
    return(
        <div class="Userscript-bg">
            <div class="HeaderUS" id="TextUS">Brandon Del Mundo</div>
            <div class="Border"></div>
            <div>
                <div class="Infobox">
                    <p>Here's a script that I made that will help pop up the track length on the website <a href="htpps://rateyourmusic.com">RateYourMusic</a> to the top of the page. This makes the track length more accessible instead of having to scroll down to see the time.</p>
                </div>
                <div class="Codeblock">
                    {test}
                </div>
            </div>
            <div class="Border"></div>
        </div>
    );
}

export default Userscripts;