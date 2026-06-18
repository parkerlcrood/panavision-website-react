
function MerchCard({merch}) {

    function addFavorite(){
        console.log('clicked');
    }

    return (<div className="merchitem">
        <div className="merchphoto">
            <img src={merch.image} alt={merch.text} className="merchphoto"/>
        </div>
        <a href="merchpages/LWGKCD.html" className="merchlink">
            <p className="merchtext">{merch.text}</p>
        </a>
        <p>{merch.price}</p>
        <div>
            <div>
                <button>Add to Cart
                </button>
            </div>
        </div>
    </div>);
}

export default MerchCard