import { Link } from "react-router-dom";
import { useState } from "react";


function FavoriteItem({item, removeFav}) {

    return (
        <li className="favoriteItem tableEntry" key={item.id}>
            <img className = "itemImage" src={`${import.meta.env.BASE_URL}${item.image}`}/>
            <span className="itemName">  
                <Link to={`/merch/${item.id}`}>
                    <p className = "itemLink">{item.text}</p>
                </Link>
            </span> 
            <span className = "itemPrice">
                <p>{item.price}</p>
            </span>
            <button className = "deleteButton" onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                removeFav(item.id);
            }}>
                Delete Item
            </button>
    </li>
    );

}

export default FavoriteItem;