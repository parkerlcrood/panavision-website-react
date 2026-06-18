import '../../css/style.css';
import {useState, useEffect} from "react";

function Favorite() {
    return <div className="favorites-empty">
        <h2>No Favorites Yet</h2>
        <p>Start adding favorites and they will show up</p>
    </div>
}

export default Favorite;