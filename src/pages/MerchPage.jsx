import MerchCard from "../components/MerchCard";
import FavoriteItem from "../components/FavoriteItem";
import FavListItem from "../components/FavListItem";
import {useState, useEffect} from "react";
import { getMerch } from "../services/api";
import { Link } from "react-router-dom";
import '../../css/style.css';
import BackToTop from '../components/BackToTop';
import CoverVideo from "../components/CoverVideo";
import CartItem from "../components/CartItem";

function MerchPage( {cart, setCart}){
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOption, setSortOption] = useState("");
    const [merchArray, setMerchArray] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartEmpty, setCartEmpty] = useState(true);
    const cartCount = cart.length;

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
        if(cart.length>0){
            setCartEmpty(false);
        };
    }, [cart]);

    function toggleCartMenu() {
        setIsCartOpen(prev => !prev);
    }

    const [favorites, setFavorites] = useState(() => {
        return JSON.parse(localStorage.getItem("favorites")) || [];
    });

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        const loadMerch = async () => {
            try {
                const merchArr = await getMerch();
                setMerchArray(merchArr);
            } catch (err){
                setError("Failed to load merch...");
            }
            finally{
                setLoading(false);
            }
        }

        loadMerch();
    }, []);  

    const getSortedMerch = (arr) => {
        const filtered = arr.filter((merch) =>
            merch?.merch_name?.toLowerCase?.().includes(searchQuery.toLowerCase())
        );

        switch (sortOption) {
            case "Alphabetical (A-Z)":
            return [...filtered].sort((a, b) => a.merch_name.localeCompare(b.merch_name));
            case "Price (Low to High)":
            return [...filtered].sort((a, b) => a.merch_price - b.merch_price);
            case "Price (High to Low)":
            return [...filtered].sort((a, b) => b.merch_price - a.merch_price);
            case "Funny Factor (Low to High)":
            return [...filtered].sort((a, b) => Number(a.merch_funny) - Number(b.merch_funny));
            default:
            return filtered;
        }
    };

    if (loading) {
        return (<article className="container">
            <h2>Loading...</h2>
            </article>);
    }

    if (error) {
        return (<article className="container">
            <h2>{error}</h2>
            </article>);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchQuery("");
    };

    function addFavorite(merch){
        if (favorites.some(item => item.merch_id === merch.merch_id)){
            return;
        }
        setFavorites(prev => [...prev, merch]);
    }

    function removeFavorite(index){
        setFavorites(favorites.filter((item) => {
            item.merch_id !== index
        }));
    }

    function addToCart(merch){
        if (cart.some(item => item.merch_id === merch.merch_id)){
            return;
        }
        setCart(prev => [...prev, merch]);
    }

    function removeFromCart(id){
        setCart(cart.filter(item => item.merch_id !== id));
    }

    return (<div className="merchpage">
        <CoverVideo/>
        <main id="top">
            <div className={`cartmenu ${isCartOpen ? "open" : ""}`}>
                <button onClick={toggleCartMenu}>
                     {isCartOpen ? "Close Cart" : `Cart${cartCount ? ` (${cartCount})` : ""}`}
                </button>
                <div className={isCartOpen ? "cartbody" : "hidden"}>
                    <ul id="cartcontainer">
                        {cart.map((item) => (
                        <CartItem key = {item.merch_id}  
                            item = {item}
                            remove = {removeFromCart}      
                        />
                    ))}
                    </ul>
                </div>
                <div className={isCartOpen ? "cartbottom" : "hidden"}>
                    <Link to={'/cart'}><button>Go To Cart Page</button></Link>
                </div>
            </div>
            <article className="container">
                <div className="cardtitle">
                    <h2>Merch</h2>
                    <div className="filtersbar">
                    <label className="title" htmlFor="searchbar"><p className="filtername">Search Items:</p></label>
                    <form onSubmit={handleSearch} className="search-form">
                        <input id="searchbar"
                            type="text"
                            className="merchsearch"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </form>
                    <label className="title" htmlFor='sortbar'><p className="filtername">Sort:</p></label>
                    <span className="filters">
                        <input 
                            list="sorting-options" 
                            onFocus={(e)=>e.target.value=""} 
                            onChange={(e)=>{
                                setSortOption(e.target.value);
                                e.target.blur();
                            }}
                            className="sortbar"
                            name="sortbar"/>
                        <datalist id="sorting-options">
                            <option value="Funny Factor (Low to High)"></option>
                            <option value="Alphabetical (A-Z)"></option>
                            <option value="Price (Low to High)"></option>
                            <option value="Price (High to Low)"></option>
                        </datalist>
                    </span>
                        <button className="favoriteslink" onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            }}>
                        <Link to ={'/Favorites'}><p className="filtername">Go to Favorites</p></Link>
                        </button>
                    </div>
                </div>
                <section className="merchtable">
                    {getSortedMerch(merchArray).map((merch) => (
                            <MerchCard
                                merch={merch}
                                key={merch.merch_id}
                                onFavorite={addFavorite}
                                isFavorite={favorites.some(item => item.merch_id === merch.merch_id)}
                                onCartAdd={addToCart}
                                isInCart={cart.some(item => item.merch_id === merch.merch_id)}
                            />
                        ))}
            </section>
            </article>
            <BackToTop/>
        </main>
    </div>);
}

export default MerchPage;