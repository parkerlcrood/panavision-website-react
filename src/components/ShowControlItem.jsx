import { Link } from "react-router-dom";
import { useState } from "react";


function ShowControlItem({show, removeShow, refreshShows}) {

    const [editing, setEditing] = useState(false);
    const [date, setDate] = useState("");
    const [stateProvince, setStateProvince] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [venue, setVenue] = useState("");
    const [infoUrl, setInfoUrl] = useState("");
    const [setlistUrl, setSetlistUrl] = useState("");

    const dateString = show.date.split("T")[0];
    const dateArr = dateString.split("-");
    const showDateString = (dateArr[1] + "/" + dateArr[2] + "/" + dateArr[0]);

    const handleEdit = async (id) => {
        try {

            const confirmed = window.confirm(`Are you sure you want to edit this show?`);

            const payload = {
                date : date === "" ? show.date : date, 
                state_province : stateProvince === "" ? show.state_province : stateProvince, 
                country : country === "" ? show.country : country,
                city : city === "" ? show.city : city, 
                venue : venue === "" ? show.venue : venue, 
                info_url : infoUrl === "" ? show.info_url : infoUrl, 
                setlist_url : setlistUrl === "" ? show.setlist_url : setlistUrl, 
            }

            if (!confirmed) return;
            await fetch(`${import.meta.env.VITE_API_URL}/api/shows/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type" : "application/json",
                    "authorization" : `Bearer ${localStorage.getItem('accessToken')}`,
                },
                body: JSON.stringify(payload)
            });
            refreshShows();
        } catch (err) {
            console.error("Edit request failed:", err);
        } 
    }

    return (
        <>
            <li className={editing ? "hidden": "videoItemMini"}>
                <div className="miniVideoImageContainer">
                </div>
                <div className="miniVideoOtherContainer">
                    <div className="miniVideoName">  
                        <p className = "admin-show-name">{show.city}, {show.state_province ? show.state_province : show.country} @ {show.venue} - {showDateString}</p>
                    </div> 
                    <span className = "buttonContainer">
                        <button className = "miniButton" onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setEditing(true);
                        }}>
                            Edit Show
                        </button>
                        <button className = "miniButton" onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            removeShow(show.id);
                        }}>
                            Delete Show
                        </button>
                    </span>
                </div>  
            </li>
            <li className={editing ? "editMerchItemMini" : "hidden"}>
                <form>
                    <p className = "admin-show-name">{show.city}, {show.state_province ? show.state_province : show.country} @ {show.venue} - {showDateString}</p>
                    <label className="inputLabel" htmlFor="showDate"><p>Date:</p></label> 
                    <input name="showDate" type="text" value={date} onChange={(e) => setDate(e.target.value)}></input>
                    <label className="inputLabel" htmlFor="showState"><p>State/Province:</p></label> 
                    <input name="showState" type="text" value={stateProvince} onChange={(e) => setStateProvince(e.target.value)}></input>
                    <label className="inputLabel" htmlFor="showCountry"><p>Country:</p></label> 
                    <input name="showCountry" type="text" value={country} onChange={(e) => setCountry(e.target.value)}></input>
                    <label className="inputLabel" htmlFor="showCity"><p>City:</p></label> 
                    <input name="showCity" type="text" value={city} onChange={(e) => setCity(e.target.value)}></input>
                    <label className="inputLabel" htmlFor="showVenue"><p>Venue:</p></label> 
                    <input name="showVenue" type="text" value={venue} onChange={(e) => setVenue(e.target.value)}></input>
                    <label className="inputLabel" htmlFor="showInfoUrl"><p>Info URL:</p></label> 
                    <input name="showInfoUrl" type="text" value={infoUrl} onChange={(e) => setInfoUrl(e.target.value)}></input>
                    <label className="inputLabel" htmlFor="showSetlist"><p>Setlist URL:</p></label> 
                    <input name="showSetlist" type="text" value={setlistUrl} onChange={(e) => setSetlistUrl(e.target.value)}></input>
                    <span className = "buttonContainer">
                        <button type="submit" className = "miniButton" onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleEdit(show.id);
                            setEditing(false);
                        }}>
                            Confirm Edit
                        </button>
                        <button className = "miniButton" onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setEditing(false);
                        }}>
                            Stop Editing Show
                        </button>
                    </span>
                </form>
                    
            </li>
    </>
    );

}

export default ShowControlItem;