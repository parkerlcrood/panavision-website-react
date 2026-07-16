import '../../css/style.css';
import {useState, useEffect} from "react";
import BackToTop from '../components/BackToTop';
import CoverVideo from '../components/CoverVideo';

function Contact() {
    return <div className="contact" id="top">
        <CoverVideo/>
        <main id="top" className="mainlike">
            <article className="container">
                <div className="cardtitle">
                    <h2>Contact Us</h2>
                </div>
                <section>
                    <p className="explainer">Questions about booking or anything else? Contact us via direct message on Instgram or our email below!</p>
                    <span className="statementcontainer">
                        <a href="mailto:panavisionband@gmail.com"><p className="statement">panavisionband@gmail.com</p> </a>
                        <a href="https://www.instagram.com/panavisionband/" target="_blank"><p className="statement">Instagram</p> </a>
                    </span>
                </section>
            </article>
            <BackToTop/>
        </main>
    </div>
}

export default Contact;