import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";
import { getMerchImages } from "../services/api";

function FavoriteItem({item, removeFav}) {
    
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const load = async () => {
            try {
                const imagesRes = await getMerchImages(item.merch_id);
                setImages(imagesRes);
            } catch (err) {
                setError("Item not found");
            } finally {
                setLoading(false);
            }
        };
        load();
    }, []);

    if(loading) return (<>
        <LoadingScreen/>
      </>);
    if(error) return (<>
        <h2>{error}</h2>
      </>);

    return (
        <li className="favoriteItem tableEntry" key={item.merch_id}>
            <img className = "itemImage" src={images[0].image_url ?? `${import.meta.env.VITE_LOCAL_API_URL}/blank.png`}/>
            <span className="itemName">  
                <Link to={`/merch/${item.merch_id}`}>
                    <p className = "itemLink">{item.merch_name}</p>
                </Link>
            </span>
            <button className = "deleteButton" onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                removeFav(item.merch_id);
            }}>
                Delete Item
            </button>
    </li>
    );

}

export default FavoriteItem;