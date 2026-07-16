import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './navbar.css';

function NavBar( {cart} ){
    
    const [menuOpen, setMenuOpen] = useState(false);
    const [cartCount, setCartCount] = useState(cart.length);

    useEffect(() => {
        setCartCount(cart.length);
    },[cart]);

    
    
    return (
        <header id="banner">
            <div id="topbanner">
                <Link to="/"><img className="bannername" src={`${import.meta.env.BASE_URL}PanavisionName.png`}/></Link>
                <section id="menubuttoncontainer">
                    <button id="menubutton" onClick={() => setMenuOpen(prev => !prev)}>
                        <div id="menuicon" className={menuOpen ? "open" : ""}></div>
                    </button>
                </section>
            </div>
            <nav id="bannernav" className={menuOpen ? "open" : ""}>
                <ul id="bannerlinks" className={menuOpen ? "open" : ""}>
                    <li onClick={() => setMenuOpen(false)}><Link to="/">Home</Link></li>
                    <li onClick={() => setMenuOpen(false)}><Link to="/videos">Videos</Link></li>
                    <li onClick={() => setMenuOpen(false)}><Link to="/music">Music</Link></li>
                    <li onClick={() => setMenuOpen(false)}><Link to="/about">About</Link></li>
                    <li onClick={() => setMenuOpen(false)}><Link to="/contact">Contact Us</Link></li>
                    <li onClick={() => setMenuOpen(false)}><Link to="/shows">Shows</Link></li>
                    <li onClick={() => setMenuOpen(false)}><Link to="/merchpage">Merch</Link></li>
                    <li onClick={() => setMenuOpen(false)}><Link to="/cart">Cart {cartCount ? `(${cartCount})` : ""}</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;