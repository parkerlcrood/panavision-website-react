import { Link } from "react-router-dom";
import { useState } from "react";


function VideoControlItem({video, removeVideo, refreshVideos}) {

    const [editing, setEditing] = useState(false);
    const [videoID, setVideoID] = useState("");
    const [videoName, setVideoName] = useState("");
    const [videoDesc, setVideoDesc] = useState("");

    const handleEdit = async (id) => {
        try {
            const confirmed = window.confirm(`Are you sure you want to edit this video ${video.title}?`);
            const payload = {
                video_id : videoID === "" ? null : videoID,
                title : videoName === "" ? null : videoName,
                description : videoDesc === "" ? null : videoDesc,
            }
            if (!confirmed) return;
            await fetch(`${import.meta.env.VITE_API_URL}/api/videos/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type" : "application/json",
                    "authorization" : `Bearer ${localStorage.getItem('accessToken')}`,
                },
                body: JSON.stringify(payload)
            });
            refreshVideos();
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
                        <p className = "admin-video-name">{video.title}</p>
                    </div> 
                    <span className = "buttonContainer">
                        <button className = "miniButton" onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setEditing(true);
                        }}>
                            Edit Video
                        </button>
                        <button className = "miniButton" onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            removeVideo(video.id);
                        }}>
                            Delete Video
                        </button>
                    </span>
                </div>  
            </li>
            <li className={editing ? "editMerchItemMini" : "hidden"}>
                <form>
                    <p className = "admin-video-name">{video.title}</p>
                    <label className="inputLabel" htmlFor="videoID"><p>YouTube Video ID:</p></label> 
                    <input name="videoID" type="text" value={videoID} onChange={(e) => setVideoID(e.target.value)}></input>
                    <label className="inputLabel" htmlFor="videoName"><p>Song Name:</p></label> 
                    <input name="videoName" type="text" value={videoName} onChange={(e) => setVideoName(e.target.value)}></input>
                    <label className="inputLabel" htmlFor="videoDescription"><p>Description:</p></label> 
                    <input name="videoDescription" type="text" value={videoDesc} onChange={(e) => setVideoDesc(e.target.value)}></input>
                    <span className = "buttonContainer">
                        <button type="submit" className = "miniButton" onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleEdit(video.id);
                            setEditing(false);
                        }}>
                            Confirm Edit
                        </button>
                        <button className = "miniButton" onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setEditing(false);
                        }}>
                            Stop Editing Video
                        </button>
                    </span>
                </form>
                    
            </li>
    </>
    );

}

export default VideoControlItem;