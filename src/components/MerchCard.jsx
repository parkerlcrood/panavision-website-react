import { Link } from "react-router-dom";

function MerchCard({merch}) {

    function addFavorite(){
        console.log('clicked');
    }

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
                <button>Add to Cart</button>
            </div>
        </div>
    );
}

export default MerchCard