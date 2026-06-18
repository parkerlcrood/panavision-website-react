import '../../css/style.css';
import {useState, useEffect} from "react";

function Home() {
    return <div className="favorites-empty">
        <div className="hero">
            <div className="promotextcontainer">
                <h1 className="promotext">Two Full Steps - New Release</h1>
                <p id="promostatement">Listen on all platforms to the newest single by Pana-vision, BigBoyTV.wav. A divergence from their usual sound, a contrast so stark it broke one a window in one of the band member's houses (true story).</p>
            </div>
            <div className="promoimagecontainer"><img className="promoimage" src="/bigboytv.png"></img></div>
        </div>
        <div className="homelogocontainer"><img class="homepagelogo" src="/PanavisionName.png"/></div>
        <div className="mysteriousPhrase"><p className="statement">Here, you're on the fast track to bigboytv status...</p></div>
        <div className="videocontainer">
            <video className="videoplayer" autoPlay loop muted playsInline poster="css/media/I touched the moss single cover.jpg">
                    <source src="/Benthic11.mp4" type="video/mp4"/>
                    <img src="/I touched the moss single cover.jpg" alt=""/>
            </video>
        </div>
        <div className="content">
            <div className=""></div>
        </div>
    </div>
}

export default Home;