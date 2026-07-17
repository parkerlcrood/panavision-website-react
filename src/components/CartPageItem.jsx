import { Link } from "react-router-dom";
import React, { useState } from "react";
import TruncatedText from "./TruncatedMobileText";


function CartPageItem({item, remove}) {

    let merchName = item.merch_name

    return (
        <li className="cartPageItem" key={item.merch_id}>
            <span className="itemImage">
                <img src={`${import.meta.env.VITE_LOCAL_API_URL}/blank.png`}/>
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

export default CartPageItem;