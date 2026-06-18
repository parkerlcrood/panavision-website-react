import '../../css/style.css';
import {useState, useEffect} from "react";

function UpcomingShows() {
    return <div className="upcomingshows">
        <div className="cover">
            <video autoPlay loop muted playsInline poster="css/media/I touched the moss single cover.jpg">
                <source src="../../css/media/Benthic11.mp4" type="video/mp4"/>
                <img src="css/media/I touched the moss single cover.jpg" alt=""/>
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
            <article class="bttcontainer" id="backtotop">
                    <a href="#top" ><p className="statement">Back to Top</p></a>
            </article>
        </main>
    </div>
}

export default UpcomingShows;