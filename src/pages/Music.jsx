import '../../css/style.css';
import {useState, useEffect} from "react";

function Music() {
    return <div className="music">
        <div className="album-background">
            <div className="album-container">
                <img src="/Like Water.jpg"/>
            </div>
            <div className="album-text">
                <p>Like Water</p>
                <p class="statement">Pana-vision's first album, home to many of the tracks the band play during their live shows.</p>
            </div>
        </div>
        <div className="album-background">
            <div className="album-container">
                <img src="/Like Water Alt.jpeg"/>
            </div>
            <div className="album-text">
                <p>Like Water (Getting Killed Edition)</p>
                <p class="statement">Pana-vision's first album again, but this time there is a funny album art. This was a limited edition release in early 2026.</p>
            </div>
        </div>
    </div>
}

export default Music;