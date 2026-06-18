import { Link } from "react-router-dom";
/* import "../pages/openMenu.js"; */

function FooterBar(){
    return (
        <footer>
            <nav>
                <section className="footerbox">
                    <ul className="lower">
                        <li><a href="./Contact" target="_blank">Contact Us</a></li>
                        <li><a href="https://www.youtube.com/@panavisionband" target="_blank">YouTube</a></li>
                        <li><a href="https://www.instagram.com/panavisionband/" target="_blank">Instagram</a></li>
                        <li><a href="https://open.spotify.com/artist/4OosEji0B0xTZfMmtXCS7r?si=ZA-Yx0mNSoOFzqbV-uGRFQ" target="_blank">Spotify</a></li>
                        <li><a href="https://music.apple.com/us/artist/pana-vision/1642425511" target="_blank">Apple Music</a></li> 
                    </ul>
                    <section className="logocontainer">
                        <img className="logo" src="/PanavisionLogoTrans.png"/>
                    </section>
                </section>
            </nav>      
        </footer>
    )
}

export default FooterBar;