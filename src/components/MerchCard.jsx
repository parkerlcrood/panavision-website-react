import { Link } from "react-router-dom";
import { useState } from "react";


function MerchCard({ merch, onFavorite, onCartAdd, isInCart}) {

    return (
        <div className="merchitem">
            <Link to={`/merch/${merch.merch_id}`} className="merchlink">
                <p className="merchtext">{merch.merch_name}</p>
            </Link>
            <p>${merch.merch_price}</p>
            <div>
                <button onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onFavorite(merch);
                    onCartAdd(merch);
                }}>{isInCart ? "Added to Cart" : "Add to Cart"}</button>
            </div>
        </div>
    );

}

export default MerchCard;