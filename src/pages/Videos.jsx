import '../../css/style.css';
import {useState, useEffect} from "react";

function Videos() {
    return <div className="videos" id="top">
        <main>
            <div class="mainlike">
            <article class="videopage">
                <div class="cardtitle">
                    <h1>Videos</h1>
                </div>
                <hr/>
                <section class="videotable">
                    <span class="wrap">
                        <figure class="videocolumn">
                            <iframe class="videoembed" src="https://www.youtube-nocookie.com/embed/UwkVkf-6H-M?si=qc_OxxWThjUhFJQK" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </figure>
                        <figure class="videoexplainer">
                            <div><h3 class="videotitle">Move Me, Wave</h3>
                            </div>
                            <div><p class="explainer">Shoutout Gavin Lee the GOAT fr</p>
                            </div>
                        </figure>
                    </span>  
                    <span class="wrap">
                        <figure class="videocolumn">
                            <video class="videoembed" src={`${import.meta.env.BASE_URL}x.mp4`} controls></video>
                        </figure>
                        <figure class="videoexplainer">
                            <h3 class="videotitle">I Touched the Moss</h3>
                            <p class="explainer">This is a description of that panavision moss video</p>
                        </figure>
                    </span>
                    <span class="wrap">
                        <figure class="videocolumn">
                            <iframe class="videoembed" src="https://www.youtube-nocookie.com/embed/UI6zybd4VaE?si=4yRJSJdM_Nr-Vu6W" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </figure>
                        <figure class="videoexplainer">
                            <h3 class="videotitle">Benthic 11</h3>
                            <p class="explainer">Those who know the location</p>
                        </figure>
                    </span>
                    <span class="wrap">
                        <figure class="videocolumn">
                            <iframe class="videoembed" src="https://www.youtube-nocookie.com/embed/uqfRkmf0ROw?si=GyCZwgS-eADVHQ0-" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </figure>
                        <figure class="videoexplainer">
                            <h3 class="videotitle">BigBoyTV.wav</h3>
                            <p class="explainer">Was it worth destroying the sac house window</p>
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