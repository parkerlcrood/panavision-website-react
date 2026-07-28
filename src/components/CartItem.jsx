import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getMerchImages } from "../services/api";
import TruncatedText from "./TruncatedMobileText";
import LoadingScreen from "./LoadingScreen";

function CartItem({item, remove}) {

    let merchName = item.merch_name
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
        <li className="cartItem" key={item.merch_id}>
            <span className="itemImage">
                <img src={images[0].image_url ?? `${import.meta.env.VITE_LOCAL_API_URL}/blank.png`}/>
            </span>
            <span className="itemName">  
                <Link to={`/merch/${item.merch_id}`}>
                    <TruncatedText className = "itemLink" id={item} text={merchName}/>
                </Link>
            </span> 
            <span className = "itemPrice">
                <p>${item.merch_price}</p>
            </span>
            <button className = "deleteButton" onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                remove(item.merch_id);
            }}>
                Delete Item
            </button>
    </li>
    );

}

export default CartItem;