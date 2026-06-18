import { Link } from "react-router-dom";
/* import "../pages/openMenu.js"; */

function NavBar(){
    return (
        <header id="banner">
            <div id="topbanner">
                <a href="/"><img className="bannername" src="css/media/PanavisionName.png"/></a>
                    <section id="menubuttoncontainer">
                        <button id="menubutton">
                            <div id="menuicon"></div>
                        </button>
                    </section>
            </div>
            <nav id="bannernav">
                <ul id="bannerlinks">
                    <li><a href="/" className="sociallist">Home</a></li>
                    <li><a href="/Videos" className="sociallist">Videos</a></li>
                    <li><a href="/Music" className="sociallist">Music</a> </li>
                    <li><a href="/About" className="sociallist">About Us</a> </li>
                    <li><a href="/Contact" className="sociallist">Contact Us</a></li>
                    <li><a href="/MerchPage" className="sociallist">Merch</a></li>
                    <li><a href="/UpcomingShows" className="sociallist">Upcoming Shows</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;