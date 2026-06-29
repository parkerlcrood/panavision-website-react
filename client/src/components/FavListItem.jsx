import { Link } from "react-router-dom";
import { useState } from "react";


function favListItem({item, removeFav}) {

    return (
        <li className="favoriteItemMini">
            <div className="miniImageContainer">
                <img className = "miniImage" src={`${import.meta.env.BASE_URL}${item.images[0]}`}/>
            </div>
            <div className="miniOtherContainer">
                <div className="miniName">  
                    <Link to={`/merch/${item.merch_id}`}>
                        <p className = "">{item.merch_name}</p>
                    </Link>
                </div> 
                <div className = "miniPrice">
                    <p>${item.merch_price}</p>
                </div>
                <button className = "miniButton" onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    removeFav(item.merch_id);
                }}>
                    Delete Item
                </button>
            </div>
            
    </li>
    );

}

export default favListItem;