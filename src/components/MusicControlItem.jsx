import { Link } from "react-router-dom";
import { useState } from "react";


function MusicControlItem({music, removeMusic, refreshMusic}) {

    const [editing, setEditing] = useState(false);
    const [proj_id, setProjID] = useState("");
    const [proj_title, setProjName] = useState("");
    const [proj_desc, setProjDesc] = useState("");

    const handleEdit = async (id) => {
        try {
            const confirmed = window.confirm(`Are you sure you want to edit this video ${music.title}?`);
            const payload = {
                proj_id : proj_id === "" ? null : proj_id,
                title : proj_title === "" ? null : proj_title,
                description : proj_desc === "" ? null : proj_desc,
            }
            if (!confirmed) return;
            await fetch(`${import.meta.env.VITE_API_URL}/api/music/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type" : "application/json",
                    "authorization" : `Bearer ${localStorage.getItem('accessToken')}`,
                },
                body: JSON.stringify(payload)
            });
            refreshMusic();
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
                        <p className = "admin-video-name">{music.title}</p>
                    </div> 
                    <span className = "buttonContainer">
                        <button className = "miniButton" onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setEditing(true);
                        }}>
                            Edit Music
                        </button>
                        <button className = "miniButton" onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            removeMusic(music.id);
                        }}>
                            Delete Music
                        </button>
                    </span>
                </div>  
            </li>
            <li className={editing ? "editMerchItemMini" : "hidden"}>
                <form>
                    <p className = "admin-video-name">{music.title}</p>
                    <label className="inputLabel" htmlFor="videoID"><p>New Image Link:</p></label> 
                    <input name="videoID" type="text" value={proj_id} onChange={(e) => setProjID(e.target.value)}></input>
                    <label className="inputLabel" htmlFor="videoName"><p>New Project Name:</p></label> 
                    <input name="videoName" type="text" value={proj_title} onChange={(e) => setProjName(e.target.value)}></input>
                    <label className="inputLabel" htmlFor="videoDescription"><p>New Description:</p></label> 
                    <input name="videoDescription" type="text" value={proj_desc} onChange={(e) => setProjDesc(e.target.value)}></input>
                    <span className = "buttonContainer">
                        <button type="submit" className = "miniButton" onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleEdit(music.id);
                            setEditing(false);
                        }}>
                            Confirm Edit
                        </button>
                        <button className = "miniButton" onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setEditing(false);
                        }}>
                            Stop Editing Project
                        </button>
                    </span>
                </form>
                    
            </li>
    </>
    );

}

export default MusicControlItem;