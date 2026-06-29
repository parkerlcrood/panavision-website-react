import { Link } from "react-router-dom";
import { useState } from "react";


function MerchCard({ merch, onFavorite, isFavorite }) {

    return (
        <div className="merchitem">
            <div className="merchphoto">
                <img src={`${import.meta.env.BASE_URL}${merch.images[0]}`} alt={merch.merch_name} className="merchphoto"/>
            </div>
            <Link to={`/merch/${merch.merch_id}`} className="merchlink">
                <p className="merchtext">{merch.merch_name}</p>
            </Link>
            <p>${merch.merch_price}</p>
            <div>
                <button onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onFavorite(merch);
                }}>{isFavorite ? "Added to Favorites" : "Add to Favorites"}</button>
            </div>
        </div>
    );

}

export default MerchCard;