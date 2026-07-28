import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMerchById, getMerchImages } from "../services/api";
import { Link } from "react-router-dom";
import '../pages/merchpages/css/merchstyle.css';
import LoadingScreen from "./LoadingScreen";

function MerchDetailPage() {
    const {id} = useParams();
    const [merch, setMerch] = useState(null);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeImage, setActiveImage] = useState(0);

    useEffect(()=>{
        const load = async () => {
            try {
                const item = await getMerchById(id);
                const imagesRes = await getMerchImages(id);
                setMerch(item);
                setImages(imagesRes);
            } catch (err) {
                setError("Item not found");
            } finally {
                setLoading(false);
            }
        };
        load();
    }, [id]);

    if(loading) return (<>
        <Link to={'/merchpage'}>
          <h3 className="btmerch">Back to Merch</h3>
        </Link>
        <LoadingScreen/>
      </>);
    if(error) return (<>
        <Link to={'/merchpage'}>
          <h3 className="btmerch">Back to Merch</h3>
        </Link>
        <h2>{error}</h2>
      </>);

    const goLeft = () => {
        setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goRight = () => {
        setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }

    return (
        <main id="top" className="merch-detail-page">
      <div className="btmerchbanner">
        <Link to={'/merchpage'}>
          <h3 className="btmerch">Back to Merch</h3>
        </Link>
      </div>
      <article className="merchpage">
        <div id="itembox">
          <div className="imagecontainer">
            <div id="arrow-left" onClick={goLeft}>
              <div className="arrow-bg">
                <img src={`${import.meta.env.BASE_URL}leftarrow.png`} alt="Prev"/>
              </div>
            </div>
            {images.length > 0 && (
                <img
                  className="merchimage"
                  src={`${images[activeImage].image_url}`}
                  alt={merch.merch_name}
                />
              )}
            <div id="arrow-right" onClick={goRight}>
              <div className="arrow-bg">
                <img src={`${import.meta.env.BASE_URL}rightarrow.png`} alt="Next"/>
              </div>
            </div>
          </div>
          <ul className="photorow">
            {images.map((img, i) => (
              <li
                key={i}
                className={i === activeImage ? "active" : ""}
                onClick={() => setActiveImage(i)}
              >
                <img src={img.image_url} alt={`${merch.merch_name} thumbnail ${i + 1}`}/>
              </li>
            ))}
          </ul>
        </div>
        <section className="merchtextbox">
          <div className="merchname">
            <h2>{merch.merch_name}</h2>
          </div>
          <div className="merchdesc">
            <p className="merchprice">${merch.merch_price}</p>
            <p className="merchdescription">{merch.merch_description}</p>
          </div>
        </section>
      </article>
    </main>
    );
}

export default MerchDetailPage;