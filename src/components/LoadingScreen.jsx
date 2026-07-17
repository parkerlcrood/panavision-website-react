import { Link } from "react-router-dom";
import { useState } from "react";
import CoverVideo from "./CoverVideo";


function LoadingScreen() {

    return (<>
        <div className="loading-screen">
            <p>Loading...</p>
        </div>
    </>
    );

}

export default LoadingScreen;