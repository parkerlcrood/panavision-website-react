import '../../css/style.css';
import {useState, useEffect} from "react";

function Music() {
    return <div className="music" id="top">
        <div className="musictable">
            <div className="album-background">
                <div className="album-container">
                    <img src={`${import.meta.env.BASE_URL}LikeWater.jpg`}/>
                </div>
                <div className="album-text">
                    <p className="album-title">Like Water</p>
                    <p className="album-description">Pana-vision's first album, home to many of the tracks the band play during their live shows.</p>
                </div>
            </div>
            <div className="album-background">
                <div className="album-container">
                    <img src={`${import.meta.env.BASE_URL}LikeWaterAlt.jpeg`}/>
                </div>
                <div className="album-text">
                    <p className="album-title">Like Water (Getting Killed Edition)</p>
                    <p className="album-description">Pana-vision's first album again, but this time there is a funny album art. This was a limited edition release in early 2026.</p>
                </div>
            </div>
        </div>
    </div>
}

export default Music;