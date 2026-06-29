import { Link } from "react-router-dom";
import { useState } from "react";


function FavoriteItem({item, removeFav}) {

    return (
        <li className="favoriteItem tableEntry" key={item.merch_id}>
            <img className = "itemImage" src={`${import.meta.env.BASE_URL}${item.images[0]}`}/>
            <span className="itemName">  
                <Link to={`/merch/${item.merch_id}`}>
                    <p className = "itemLink">{item.merch_name}</p>
                </Link>
            </span> 
            <span className = "itemPrice">
                <p>${item.merch_price}</p>
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