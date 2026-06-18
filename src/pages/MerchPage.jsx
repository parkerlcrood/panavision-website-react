import MerchCard from "../components/MerchCard";
import {useState, useEffect} from "react";
import { getMerch } from "../services/api";
import '../../css/style.css';
//import "./cartMenu.js";

function MerchPage(){
    const [searchQuery, setSearchQuery] = useState("");
    const [merchArray, setMerchArray] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const loadMerch = async () => {
            try {
                const merchArr = await getMerch();
                setMerchArray(merchArr);
            } catch (err){
                setError("Failed to load merch...");
            }
            finally{
                setLoading(false);
            }
        }

        loadMerch();
    }, [])

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchQuery("")
    };

    return (<div className="merchpage" id="top">
            <div className="cover">
            <video autoPlay loop muted playsInline poster={`${import.meta.env.BASE_URL}I touched the moss single cover.jpg`}>
                <source src={`${import.meta.env.BASE_URL}Benthic11.mp4`} type="video/mp4"/>
                <img src={`${import.meta.env.BASE_URL}I touched the moss single cover.jpg`} alt=""/>
            </video>
        </div>
        <main id="top" className="mainlike">
            <article>
                <div className="cartmenu">
                    <button className="cartbutton"><p className="buttontext"></p></button>
                    <div id="cartcontainer" className="hidden">
                        <ul id="cartitems">
                        </ul>
                    </div>
                </div>
            </article>
            <article className="container">
                <div className="cardtitle">
                    <h2>Merch</h2>
                    <div className="filtersbar">
                    <label className="title" htmlFor="searchbar"><p>Search Items:</p></label>
                    <form onSubmit={handleSearch} className="search-form">
                        <input id="searchbar"
                            type="text"
                            className="merchsearch"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </form>
                    <label className="title" htmlFor='sortbar'><p>Sort:</p></label>
                    <span className="filters">
                        <input list="sorting-options" onFocus={(e)=>e.target.value=""} onChange={(e)=>e.target.blur()} className="sortbar" name="sortbar"/>
                        <datalist id="sorting-options">
                            <option value="Funny Factor (Low to High)"></option>
                            <option value="Alphabetical (A-Z)"></option>
                            <option value="Price (Low to High)"></option>
                            <option value="Price (High to Low)"></option>
                        </datalist>
                        
                    </span>
                    </div>
                </div>
                <section className="merchtable">
                    {merchArray.map(
                        (merch)=>
                        merch.text.toLowerCase().includes(searchQuery.toLowerCase()) && (
                        <MerchCard merch={merch} key={merch.text}/>
                    )
                )} 
            </section>
            </article>
            <article className="bttcontainer" id="backtotop">
                    <a href="#top" ><p className="statement">Back to Top</p></a>
            </article>
        </main>
        </div>);

}

export default MerchPage;