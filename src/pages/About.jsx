import '../../css/style.css';
import {useState, useEffect} from "react";

function About() {
    return <div className="about">
        <div className="cover">
            <video autoPlay loop muted playsInline poster={`${import.meta.env.BASE_URL}I touched the moss single cover.jpg`}>
                <source src={`${import.meta.env.BASE_URL}Benthic11.mp4`} type="video/mp4"/>
                <img src={`${import.meta.env.BASE_URL}I touched the moss single cover.jpg`} alt=""/>
            </video>
        </div>
        <main id="top" className="mainlike">
            <article className="container">
                <div className="cardtitle">
                    <h2>About Us</h2>
                </div>
                <section>
                    <p className="statement">
                    Pana-vision is a Santa Cruz based art rock band featuring Aidan Botticella (Vocals/Guitar/Keys), Parker Reed (Guitar/Keys/Drum Machines) and Ian Hardcastle (Bass). The first EP, The Frown, is made up of experimental tracks that Aidan made before the band's founding. We (Aidan and Parker) after that made a series of singles as a build up to an album that we hoped would come sooner than it did. Since then, we picked up our bassist, Ian, and are performing around Santa Cruz to show off our new material! Our album, Like Water, was released on December 30th, 2025. This album features five of the singles we have released in the past years along with five other tracks that we've played live in previous sets. Some are saying that we are already at work on a second album before our first is even released...
                    </p>
                </section> 
            </article>
            <article className="bttcontainer" id="backtotop">
                <a href="#top" ><p className="statement">Back to Top</p></a>
            </article>
        </main>
    </div>
}

export default About;