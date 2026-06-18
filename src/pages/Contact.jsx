import '../../css/style.css';
import {useState, useEffect} from "react";

function Contact() {
    return <div className="contact" id="top">
        <div className="cover">
            <video autoPlay loop muted playsInline poster={`${import.meta.env.BASE_URL}I touched the moss single cover.jpg`}>
                <source src={`${import.meta.env.BASE_URL}Benthic11.mp4`} type="video/mp4"/>
                <img src={`${import.meta.env.BASE_URL}I touched the moss single cover.jpg`} alt=""/>
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
                    <button onClick={() => window.scrollTo({ top:0, behavior: "smooth"})}>
                        <p className="statement">Back to Top</p>
                    </button>
            </article>
        </main>
    </div>
}

export default Contact;