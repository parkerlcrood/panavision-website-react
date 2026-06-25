import { Link } from "react-router-dom";
import { useState } from "react";


function MerchCard({ merch, onFavorite }) {

    return (
        <div className="merchitem">
            <div className="merchphoto">
                <img src={`${import.meta.env.BASE_URL}${merch.image}`} alt={merch.text} className="merchphoto"/>
            </div>
            <Link to={`/merch/${merch.id}`} className="merchlink">
                <p className="merchtext">{merch.text}</p>
            </Link>
            <p>{merch.price}</p>
            <div>
                <button onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onFavorite(merch);
                }}>Add to Favorites</button>
            </div>
        </div>
    );

}

export default MerchCard