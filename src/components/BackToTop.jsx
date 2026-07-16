function BackToTop () {

    return (
        <article className="bttcontainer" id="backtotop">
                <button onClick={() => window.scrollTo({ top:0, behavior: "smooth"})}>
                    <p className="statement">Back to Top</p>
                </button>
        </article>
    );
}

export default BackToTop;

