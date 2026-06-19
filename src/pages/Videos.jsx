import '../../css/style.css';
import {useState, useEffect} from "react";

function Videos() {
    return <div className="videos" id="top">
        <main>
            <div className="mainlike">
            <article className="videopage">
                <div className="cardtitle">
                    <h1>Videos</h1>
                </div>
                <hr/>
                <section className="videotable">
                    <span className="wrap">
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
                            <p className="explainer">This is a description of that panavision moss video</p>
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
                    </span>
                </section>  
            </article>
            <article className="bttcontainer" id="backtotop">
                    <button onClick={() => window.scrollTo({ top:0, behavior: "smooth"})}>
                        <p className="statement">Back to Top</p>
                    </button>
            </article>
            </div>
        </main>
    </div>
}

export default Videos;