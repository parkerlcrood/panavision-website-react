import './admin.css';
import 'react-toastify/dist/ReactToastify.css';
import {useState, useEffect} from "react";
import { useNavigate, Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { authFetch } from './authFetch';
import { getMerch, getMusic, getVideos, getShows } from "../services/api";
import MerchControlItem from '../components/MerchControlItem';
import BackToTop from '../components/BackToTop';
import VideoControlItem from '../components/VideoControlItem';
import MusicControlItem from '../components/MusicControlItem';
import ShowControlItem from '../components/ShowControlItem';



function Admin() {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const loadAdmin = async () => {
            try {
                const merchArr = await getMerch();
                const videoArr = await getVideos();
                const musicArr = await getMusic();
                const showsArr = await getShows();
                setMerchArray(merchArr);
                setVideoArray(videoArr);
                setMusicArray(musicArr);
                setShowArray(showsArr.showsArr);
            } catch (err){
                setError("Failed to load assets...");
            }
            finally{
                setLoading(false);
            }
        }
        loadAdmin();
    }, []);  

    const [checkingAuth, setCheckingAuth] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        async function checkAuth() {
            try {
                const res = await authFetch(`${import.meta.env.VITE_API_URL}/api/auth/admin`);

                if (!res.ok) {
                    throw new Error("Unauthorized");
                }

                const userData = await res.json();

                setUser(userData);
                setAuthenticated(true);

            } catch {
                setAuthenticated(false);
            } finally {
                setCheckingAuth(false);
            }
        }

        checkAuth();
    }, []);

    const [merchArray, setMerchArray] = useState([]);
    const [merchDrop, setMerchDrop] = useState(false);
    const [adding, setAdding] = useState(false);
    const [merchName, setMerchName] = useState("");
    const [merchPrice, setMerchPrice] = useState("");
    const [merchDescription, setMerchDescription] = useState("");
    const [merchFunny, setMerchFunny] = useState("");

    const [videoArray, setVideoArray] = useState([]);
    const [videoDrop, setVideoDrop] = useState(false);
    const [addingVideo, setAddingVideo] = useState(false);
    const [youtubeID, setYoutubeID] = useState("");
    const [videoName, setVideoName] = useState("");
    const [videoDesc, setVideoDesc] = useState("");

    const [musicArray, setMusicArray] = useState([]);
    const [musicDrop, setMusicDrop] = useState(false);
    const [addingMusic, setAddingMusic] = useState(false);
    const [proj_id, setProjID] = useState("");
    const [proj_title, setProjName] = useState("");
    const [proj_desc, setProjDesc] = useState("");

    const [showArray, setShowArray] = useState([]);
    const [showDrop, setShowDrop] = useState(false);
    const [addingShow, setAddingShow] = useState(false);
    const [date, setDate] = useState("");
    const [stateProvince, setStateProvince] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [venue, setVenue] = useState("");
    const [infoUrl, setInfoUrl] = useState("");
    const [setlistUrl, setSetlistUrl] = useState("");

    const handleLogout = async () => {
        try {
            const refreshToken = localStorage.getItem("refreshToken");

            await fetch(`${import.meta.env.VITE_API_URL}/api/auth/logout`,{  
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({refreshToken})
            });
        } catch (err) {
            console.error("Logout request failed:", err);
        } finally {
            localStorage.removeItem("refreshToken");
            localStorage.removeItem("accessToken");
            navigate("/login");
        }  
    }

    const handleDelete = async (e) => {
        try {
            const confirmed = window.confirm(`Delete this merch item?`);
            if (!confirmed) return;
            const res = await authFetch(`${import.meta.env.VITE_API_URL}/api/merch/${e}`,
                {  
                    method: "DELETE",
                }
            );
            if (!res.ok) {
                if(res.status === 401){
                    navigate("/login");
                }
                throw new Error("Request failed");
            }
            await fetchMerch();
            setMerchArray(prev =>
                prev.filter(item => item.merch_id !== e)
            );
            toast.success("Deleted item.", {closeOnClick:true, position:'top-right'});
        } catch (err) {
            toast.error("Failed to delete item.");
            console.error(err);
        } 
    }

    const handleDeleteVideo = async (e) => {
        try {
            const confirmed = window.confirm(`Delete this video?`);
            if (!confirmed) return;
            const res = await authFetch(`${import.meta.env.VITE_API_URL}/api/videos/${e}`,  
                {  
                    method: "DELETE",
                }
            );
            if (!res.ok) {
                if(res.status === 401){
                    navigate("/login");
                }
                throw new Error("Request failed");
            }
            await fetchVideos();
            setVideoArray(prev =>
                prev.filter(video => video.youtubeID !== e)
            );
            toast.success("Deleted video.", {closeOnClick:true, position:'top-right'});
        } catch (err) {
            toast.error("Failed to delete video.");
            console.error(err);
        } 
    }

    const handleDeleteMusic = async (e) => {
        try {
            const confirmed = window.confirm(`Delete this music ${e}?`);
            if (!confirmed) return;
            const res = await authFetch(`${import.meta.env.VITE_API_URL}/api/music/${e}`,  
                {  
                    method: "DELETE",
                }
            );
            if (!res.ok) {
                if(res.status === 401){
                    navigate("/login");
                }
                throw new Error("Request failed");
            }
            await fetchMusic();
            setMusicArray(prev =>
                prev.filter(music => music.id !== e)
            );
            toast.success("Deleted music.", {closeOnClick:true, position:'top-right'});
        } catch (err) {
            toast.error("Failed to delete music.");
            console.error(err);
        } 
    }

    const handleDeleteShow = async (e) => {
        try {
            const confirmed = window.confirm(`Delete this show ${e}?`);
            if (!confirmed) return;
            const res = await authFetch(`${import.meta.env.VITE_API_URL}/api/shows/${e}`,  
                {  
                    method: "DELETE",
                }
            );
            if (!res.ok) {
                if(res.status === 401){
                    navigate("/login");
                }
                throw new Error("Request failed");
            }
            await fetchShows();
            setMusicArray(prev =>
                prev.filter(show => show.id !== e)
            );
            toast.success("Deleted show.", {closeOnClick:true, position:'top-right'});
        } catch (err) {
            toast.error("Failed to delete show.");
            console.error(err);
        } 
    }

    const handleAdd = async () => {
        try {
            const confirmed = window.confirm(`Are you sure you want to add this merch item ${merchName}?`);
            const payload = {
                merch_name : merchName === "" ? null : merchName,
                merch_description : merchDescription === "" ? null : merchDescription,
                merch_funny : merchFunny === "" ? null : Number(merchFunny),
                merch_price : merchPrice === "" ? null : Number(merchPrice),
            }
            if (!confirmed) return;
            const res = await authFetch(`${import.meta.env.VITE_API_URL}/api/merch/`, {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify(payload)
            });
            if (!res.ok) {
                if(res.status === 401){
                    navigate("/login");
                }
                throw new Error("Request failed");
            }
            await fetchMerch();
            setMerchName("");
            setMerchDescription("");
            setMerchFunny("");
            setMerchPrice("");
            toast.success("Added item.", {closeOnClick:true, position:'top-right'});

        } catch (err) {
            console.error("Add request failed:", err);
        } 
    }

    const handleAddVideo = async (e) => {
        try {
            const confirmed = window.confirm(`Are you sure you want to add this video ${e}?`);
            const payload = {
                video_id : youtubeID,
                title : videoName,
                description : videoDesc
            }
            if (!confirmed) return;
            const res = await authFetch(`${import.meta.env.VITE_API_URL}/api/videos/`, {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify(payload)
            });
            if (!res.ok) {
                if(res.status === 401){
                    navigate("/login");
                }
                throw new Error("Request failed");
            }
            await fetchVideos();
            setYoutubeID("");
            setVideoName("");
            setVideoDesc("");
            toast.success("Added video.", {closeOnClick:true, position:'top-right'});

        } catch (err) {
            console.error("Add request failed:", err);
        } 
    }

    const handleAddMusic = async () => {
        try {
            const confirmed = window.confirm(`Are you sure you want to add this music ${proj_title}?`);
            const payload = {
                proj_id : proj_id,
                title : proj_title,
                description : proj_desc
            }
            if (!confirmed) return;
            const res = await authFetch(`${import.meta.env.VITE_API_URL}/api/music/`, {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify(payload)
            });
            if (!res.ok) {
                if(res.status === 401){
                    navigate("/login");
                }
                throw new Error("Request failed");
            }
            await fetchMusic();
            setProjID("");
            setProjName("");
            setProjDesc("");
            toast.success("Added music.", {closeOnClick:true, position:'top-right'});

        } catch (err) {
            console.error("Add request failed:", err);
        } 
    }

    const handleAddShow = async () => {
        try {
            const confirmed = window.confirm(`Are you sure you want to add this show?`);
            const payload = {
                date : date === "" ? null : date, 
                state_province : stateProvince === "" ? null : stateProvince, 
                country : country === "" ? null : country,
                city : city === "" ? null : city, 
                venue : venue === "" ? null : venue, 
                info_url : infoUrl === "" ? null : infoUrl, 
                setlist_url : setlistUrl === "" ? null : setlistUrl, 
            }
            if (!confirmed) return;
            const res = await authFetch(`${import.meta.env.VITE_API_URL}/api/shows/`, {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify(payload)
            });
            if (!res.ok) {
                if(res.status === 401){
                    navigate("/login");
                }
                throw new Error("Request failed");
            }
            await setDate("");
            setStateProvince("");
            setCountry("");
            setCity("");
            setVenue("");
            setInfoUrl("");
            setSetlistUrl("");
            toast.success("Added show.", {closeOnClick:true, position:'top-right'});
            fetchShows();
        } catch (err) {
            console.error("Add request failed:", err);
        } 
    }

    const fetchMerch = async () => {
        const merchArr = await getMerch();
        setMerchArray(merchArr);
    };

    const fetchVideos = async () => {
        const videoArr = await getVideos();
        setVideoArray(videoArr);
    };

    const fetchMusic = async () => {
        const musicArr = await getMusic();
        setMusicArray(musicArr);
    };

    const fetchShows = async () => {
        const showsArr = await getShows();
        setShowArray(showsArr.showsArr);
    };

    const dropMerch = () => {
        setMerchDrop(!merchDrop);
    }

    const dropVideo = () => {
        setVideoDrop(!videoDrop);
    }

    const dropMusic = () => {
        setMusicDrop(!musicDrop);
    }

    const dropShows = () => {
        setShowDrop(!showDrop);
    }

    if (checkingAuth) {
        return <p>Checking Authentication...</p>
    }

    if (!authenticated) {
        return <Navigate to="/login" />;
    }

    return (<>
        <div className="admin-header">
            <p>Hello, admin {user?.user_name}</p>
            <button type="button" className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
        <div className="adminpanel" id="top">
            <div className={ merchDrop ? "merchsection" : "reducedSection" }>  
                <span className="sectiontop">
                    <p>Merch Controls</p>
                    <span className={`merchDrop ${merchDrop ? "open" : ""}`} onClick={dropMerch}></span>
                </span>
                <div className="admin-body">
                    <div className="merch-mod">
                        <ul className="crud-container">
                            <li className='merchItemMini'><p>Edit/Delete Merch</p></li>
                            {merchArray.map((item) => (
                            <MerchControlItem key = {item.merch_id}  
                                item = {item}
                                removeItem = {handleDelete}  
                                refreshMerch = {fetchMerch} 
                            />
                        ))}
                        </ul>
                    </div>
                    <div className="merch-mod">
                        <ul className="crud-container">
                            <li className='merchItemMini'><p>Create Merch Item</p></li>
                            <li className={adding ? 'merchItemMini' : 'hidden'}>
                                <label className="inputLabel" htmlFor="merchName"><p>Merch Name:</p></label> 
                                <input name="merchName" type="text" value={merchName} onChange={(e) => setMerchName(e.target.value)}></input>
                                <label className="inputLabel" htmlFor="merchPrice"><p>Price:</p></label> 
                                <input name="merchPrice" type="number" value={merchPrice} onChange={(e) => setMerchPrice(e.target.value)}></input>
                                <label className="inputLabel" htmlFor="merchImage"><p>Description:</p></label> 
                                <input name="merchDescription" type="textarea" value={merchDescription} onChange={(e) => setMerchDescription(e.target.value)}></input>
                                <label className="inputLabel" htmlFor="merchFunny"><p>Funny Factor:</p></label> 
                                <input name="merchFunny" type="number" value={merchFunny} onChange={(e) => setMerchFunny(e.target.value)}></input>
                            </li>
                            <li className="merchItemMini">
                                <span className ={adding ? "buttonContainer" : "hidden"}>
                                    <button type="submit" className = "miniButton" onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        handleAdd();
                                        setAdding(false);
                                    }}>
                                        Confirm Add
                                    </button>
                                    <button className ="miniButton" onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setAdding(false);
                                    }}>
                                        Stop Adding Item
                                    </button>
                                </span>
                                <button type="submit" className = {adding ? "hidden" : "miniButton"} onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setAdding(!adding);
                                    }}>
                                        Starting Adding Item
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={ videoDrop ? "merchsection" : "reducedSection" }>  
                <span className="sectiontop">
                    <p>Video Controls</p>
                    <span className={`merchDrop ${videoDrop ? "open" : ""}`} onClick={dropVideo}></span>
                </span>
                <div className="admin-body">
                    <div className="merch-mod">
                        <ul className="crud-container">
                            <li className='merchItemMini'><p>Edit/Delete Videos</p></li>
                            {videoArray.map((video) => (
                            <VideoControlItem key = {video.id}
                            video = {video}
                            removeVideo = {(e) => handleDeleteVideo(e)}  
                            refreshVideos = {fetchVideos} 
                            />
                        ))}
                        </ul>
                    </div>
                    <div className="merch-mod">
                        <ul className="crud-container">
                            <li className='merchItemMini'><p>Add Video</p></li>
                            <li className={addingVideo ? 'merchItemMini' : 'hidden'}>
                                <label className="inputLabel" htmlFor="videoID"><p>YouTube Video ID:</p></label> 
                                <input name="videoID" type="text" value={youtubeID} onChange={(e) => setYoutubeID(e.target.value)}></input>
                                <label className="inputLabel" htmlFor="videoName"><p>Song Name:</p></label> 
                                <input name="videoName" type="text" value={videoName} onChange={(e) => setVideoName(e.target.value)}></input>
                                <label className="inputLabel" htmlFor="videoDescription"><p>Description:</p></label> 
                                <input name="videoDescription" type="text" value={videoDesc} onChange={(e) => setVideoDesc(e.target.value)}></input>
                            </li>
                            <li className="merchItemMini">
                                <span className ={addingVideo ? "buttonContainer" : "hidden"}>
                                    <button type="submit" className = "miniButton" onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        handleAddVideo();
                                        setAddingVideo(!addingVideo);
                                    }}>
                                        Confirm Add
                                    </button>
                                    <button className ="miniButton" onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setAddingVideo(false);
                                    }}>
                                        Stop Adding Video
                                    </button>
                                </span>
                                <button type="submit" className = {addingVideo ? "hidden" : "miniButton"} onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setAddingVideo(!addingVideo);
                                    }}>
                                        Starting Adding Video
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={ musicDrop ? "merchsection" : "reducedSection" }>  
                <span className="sectiontop">
                    <p>Music Controls</p>
                    <span className={`merchDrop ${musicDrop ? "open" : ""}`} onClick={dropMusic}></span>
                </span>
                <div className="admin-body">
                    <div className="merch-mod">
                        <ul className="crud-container">
                            <li className='merchItemMini'><p>Edit/Delete Music</p></li>
                            {musicArray.map((music) => (
                                <MusicControlItem key = {music.id}
                                music = {music}
                                removeMusic = {(e) => handleDeleteMusic(e)}  
                                refreshMusic = {fetchMusic} 
                            />
                        ))}
                        </ul>
                    </div>
                    <div className="merch-mod">
                        <ul className="crud-container">
                            <li className='merchItemMini'><p>Add Music</p></li>
                            <li className={addingMusic ? 'merchItemMini' : 'hidden'}>
                                <label className="inputLabel" htmlFor="imageLink"><p>Image Link:</p></label> 
                                <input name="imageLink" type="text" value={proj_id} onChange={(e) => setProjID(e.target.value)}></input>
                                <label className="inputLabel" htmlFor="projName"><p>Project Name:</p></label> 
                                <input name="projName" type="text" value={proj_title} onChange={(e) => setProjName(e.target.value)}></input>
                                <label className="inputLabel" htmlFor="projDescription"><p>Description:</p></label> 
                                <input name="projDescription" type="text" value={proj_desc} onChange={(e) => setProjDesc(e.target.value)}></input>
                            </li>
                            <li className="merchItemMini">
                                <span className ={addingMusic ? "buttonContainer" : "hidden"}>
                                    <button type="submit" className = "miniButton" onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        handleAddMusic();
                                        setAddingMusic(!addingMusic);
                                    }}>
                                        Confirm Add
                                    </button>
                                    <button className ="miniButton" onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setAddingMusic(false);
                                    }}>
                                        Stop Adding Music
                                    </button>
                                </span>
                                <button type="submit" className = {addingMusic ? "hidden" : "miniButton"} onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setAddingMusic(!addingMusic);
                                    }}>
                                        Starting Adding Music
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={ showDrop ? "merchsection" : "reducedSection" }>  
                <span className="sectiontop">
                    <p>Show Controls</p>
                    <span className={`merchDrop ${showDrop ? "open" : ""}`} onClick={dropShows}></span>
                </span>
                <div className="admin-body">
                    <div className="merch-mod">
                        <ul className="crud-container">
                            <li className='merchItemMini'><p>Edit/Delete Shows</p></li>
                            {showArray.map((show) => (
                                <ShowControlItem key = {show.id}
                                show = {show}
                                removeShow = {(e) => handleDeleteShow(e)}  
                                refreshShows = {fetchShows} 
                            />
                        ))}
                        </ul>
                    </div>
                    <div className="merch-mod">
                        <ul className="crud-container">
                            <li className='merchItemMini'><p>Add Shows</p></li>
                            <li className={addingShow ? 'merchItemMini' : 'hidden'}>
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
                            </li>
                            <li className="merchItemMini">
                                <span className ={addingShow ? "buttonContainer" : "hidden"}>
                                    <button type="submit" className = "miniButton" onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        handleAddShow();
                                        setAddingShow(!addingShow);
                                    }}>
                                        Confirm Add
                                    </button>
                                    <button className ="miniButton" onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setAddingShow(false);
                                    }}>
                                        Stop Adding Show
                                    </button>
                                </span>
                                <button type="submit" className = {addingShow ? "hidden" : "miniButton"} onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setAddingShow(!addingShow);
                                    }}>
                                        Starting Adding Show
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <BackToTop/>
            <ToastContainer/>
        </div>
        </>
    );
}

export default Admin;