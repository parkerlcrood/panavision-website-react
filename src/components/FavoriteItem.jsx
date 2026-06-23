import { Link } from "react-router-dom";
import { useState } from "react";


function FavoriteItem({item, removeFav}) {

    return (
        <li className="favoriteItem tableEntry" key={item.id}>
            <img className = "itemImage" src={`${import.meta.env.BASE_URL}${item.image}`}/>
            <p className = "itemName">{item.text}</p>
            <p className = "itemID">{item.id}</p>
            <button className = "deleteButton" onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                removeFav(item);
            }}>
                Delete Item
            </button>
    </li>
    );

}

export default FavoriteItem;