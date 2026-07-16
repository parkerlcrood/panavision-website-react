import '../../css/style.css';
import {useState, useEffect} from "react";
import BackToTop from '../components/BackToTop';
import VideoSection from '../components/VideoSection';
import { getVideos } from '../services/api';


function Videos() {

    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
            const loadVideos = async () => {
                try {
                    const videoArr = await getVideos();
                    setVideos(videoArr);
                } catch (err){
                    setError("Failed to load videos...");
                }
                finally{
                    setLoading(false);
                }
            }
    
            loadVideos();
        }, []);  

    if (loading) {
        return (<div className="videopage"><h1>Loading...</h1></div>);
    }

    if (error) {
        return (<div className="videopage"><h1>{error}</h1></div>);
    }

    return (<div className="videos" id="top">
        <main>
            <div className="mainlike">
            <article className="videopage">
                <hr/>
                <section className="videotable">
                    {videos.map((video) => (
                        <VideoSection key = {video.id}
                        video = {video}
                        />
                    ))}
                    {/* <span className="wrap">
                        <figure className="videocolumn">
                            <iframe className="videoembed" src="https://www.youtube-nocookie.com/embed/UwkVkf-6H-M?si=qc_OxxWThjUhFJQK" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </figure>
                        <figure className="videoexplainer">
                            <div><h3 className="videotitle">Move Me, Wave</h3>
                            </div>
                            <div><p className="explainer">Shoutout Gavin Lee the GOAT fr</p>
                            </div>
                        </figure>
                    </span>  
                    <span className="wrap">
                        <figure className="videocolumn">
                            <video className="videoembed" src={`${import.meta.env.BASE_URL}x.mp4`} controls></video>
                        </figure>
                        <figure className="videoexplainer">
                            <h3 className="videotitle">I Touched the Moss</h3>
                            <p className="explainer">This is a description of that panavision bmoss video</p>
                        </figure>
                    </span>
                    <span className="wrap">
                        <figure className="videocolumn">
                            <iframe className="videoembed" src="https://www.youtube-nocookie.com/embed/UI6zybd4VaE?si=4yRJSJdM_Nr-Vu6W" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </figure>
                        <figure className="videoexplainer">
                            <h3 className="videotitle">Benthic 11</h3>
                            <p className="explainer">Those who know the location</p>
                        </figure>
                    </span>
                    <span className="wrap">
                        <figure className="videocolumn">
                            <iframe className="videoembed" src="https://www.youtube-nocookie.com/embed/uqfRkmf0ROw?si=GyCZwgS-eADVHQ0-" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </figure>
                        <figure className="videoexplainer">
                            <h3 className="videotitle">BigBoyTV.wav</h3>
                            <p className="explainer">Was it worth destroying the sac house window</p>
                        </figure>
                    </span> */}
                </section>  
            </article>
            <BackToTop/>
            </div>
        </main>
    </div>);
}

export default Videos;