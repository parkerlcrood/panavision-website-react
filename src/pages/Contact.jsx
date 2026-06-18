import '../../css/style.css';
import {useState, useEffect} from "react";

function Contact() {
    return <div className="contact">
        <div className="cover">
            <video autoPlay loop muted playsInline poster="css/media/I touched the moss single cover.jpg">
                <source src="../../css/media/Benthic11.mp4" type="video/mp4"/>
                <img src="css/media/I touched the moss single cover.jpg" alt=""/>
            </video>
        </div>
        <main id="top" className="mainlike">
            <article className="container">
                <div className="cardtitle">
                    <h2>Contact Us</h2>
                </div>
                <section>
                    <p className="explainer">Questions about booking or anything else? Contact us via direct message on Instgram or our email below!</p>
                    <hr/>
                    <span className="statementcontainer">
                        <a href="mailto:panavisionband@gmail.com"><p className="statement">panavisionband@gmail.com</p> </a>
                        <a href="https://www.instagram.com/panavisionband/" target="_blank"><p className="statement">Instagram</p> </a>
                    </span>
                </section>
            </article>
            <article className="bttcontainer" id="backtotop">
                    <a href="#top" ><p className="statement">Back to Top</p></a>
            </article>
        </main>
    </div>
}

export default Contact;