import { Link } from "react-router-dom";

function NavBar(){
    return (
        <header id="banner">
            <div id="topbanner">
                <a href="/"><img className="bannername" src={`${import.meta.env.BASE_URL}PanavisionName.png`}/></a>
                    <section id="menubuttoncontainer">
                        <button id="menubutton">
                            <div id="menuicon"></div>
                        </button>
                    </section>
            </div>
            <nav id="bannernav">
                <ul id="bannerlinks">
                    <Link to="/">Home</Link>
                    <Link to="/videos">Videos</Link>
                    <Link to="/music">Music</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="/merch">Merch</Link>
                    <Link to="/upcomingshows">Upcoming Shows</Link>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;