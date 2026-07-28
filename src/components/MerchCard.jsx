import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMerchImages } from "../services/api";
import LoadingScreen from "./LoadingScreen";


function MerchCard({ merch, onFavorite, onCartAdd, isInCart}) {

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const load = async () => {
            try {
                const imagesRes = await getMerchImages(merch.merch_id);
                setImages(imagesRes);
            } catch (err) {
                console.error(err);
                setError("Failed to load images");
            } finally {
                setLoading(false);
            }
        };
        load();
    }, [merch.merch_id]);

    if(loading) return (<>
        <LoadingScreen/>
      </>);
    if(error) return (<>
        <h2>{error}</h2>
      </>);

    return (
        <div className="merchitem">
            <div className="merchphoto">
                <img 
                    className="merchimage"
                    src={
                        images[0]?.image_url ?? 
                        `${import.meta.env.VITE_LOCAL_API_URL}/blank.png`
                    }
                />
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
                    onCartAdd(merch);
                }}>{isInCart ? "Added to Cart" : "Add to Cart"}</button>
            </div>
        </div>
    );

}

export default MerchCard;