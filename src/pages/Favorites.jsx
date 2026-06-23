import {useState, useEffect} from "react";
import { getMerch } from "../services/api";
import { Link } from "react-router-dom";
import '../../css/style.css';
import FavoriteItem from "../components/FavoriteItem";

function Favorite() {

    const [favorites, setfavorites] = useState(() => {
        return JSON.parse(localStorage.getItem("favorites")) || [];
    });

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
        if(favorites.length>1){
            isFavoritesEmpty = false;
        };
    }, [favorites]);

    let isFavoritesEmpty = true;

    if(favorites.length>0){
        isFavoritesEmpty = false;
    };

    function removeFavorite(index){
        setfavorites(prev => {
            const copy = [...prev];
            copy.splice(index, 1);
            return copy;
        });
    }

    function getId(item){
        return item;
    }

    return (
    <div>
        <div className="btmerchbanner">
            <Link to={'/merchpage'}>
            <h3 className="btmerch">Back to Merch</h3>
            </Link>
        </div>
        <div className={isFavoritesEmpty ? "favorites-empty" : "favorites"} id="top">
            <p className="favoritesTitle">{isFavoritesEmpty ? "No Favorites Yet": "Favorites"}</p>
            <p className="favoritesText">{isFavoritesEmpty ? "Start adding favorites and they will show up": "View your favorite items below:"}</p>
            <div> 
                <ul className="favoritesTable">
                    <li className="favoriteItem" key={-1}>
                            <img className = "itemImage" src={`${import.meta.env.BASE_URL}/PanavisionLogoTrans.png`}/>
                            <p className = "itemName">Item Name</p>
                            <p className = "itemID">Item ID</p>
                            <button className = "deleteButton">
                                Delete Item
                            </button>
                    </li>
                    {favorites.map((item) => (
                        <FavoriteItem key = {item.id}  
                            item = {item}
                            removeFav = {removeFavorite}      
                        />
                    ))}
                </ul>
            </div>
        </div>
    </div>

    );

}

export default Favorite;