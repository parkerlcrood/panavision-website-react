import '../../css/style.css';
import {useState, useEffect} from "react";

function UpcomingShows() {
    return <div className="upcomingshows" id="top">
        <div className="cover">
            <video autoPlay loop muted playsInline poster={`${import.meta.env.BASE_URL}I touched the moss single cover.jpg`}>
                <source src={`${import.meta.env.BASE_URL}Benthic11.mp4`} type="video/mp4"/>
                <img src={`${import.meta.env.BASE_URL}I touched the moss single cover.jpg`} alt=""/>
            </video>
        </div>
        <main id="top" className="mainlike">
            <article className="container">
                <div className="cardtitle">
                    <h2>Upcoming Shows</h2>
                </div>
                <section>
                    <p className="explainer">We currently have no upcoming shows...
                    </p>
                </section>
            </article>
            <article className="bttcontainer" id="backtotop">
                    <button onClick={() => window.scrollTo({ top:0, behavior: "smooth"})}>
                        <p className="statement">Back to Top</p>
                    </button>
            </article>
        </main>
    </div>
}

export default UpcomingShows;