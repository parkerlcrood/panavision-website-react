import '../../css/style.css';
import {useState, useEffect} from "react";
import { getMusic } from '../services/api';
import MusicSection from '../components/MusicSection';
import LoadingScreen from '../components/LoadingScreen';

function Music() {

    const [music, setMusic] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
            const loadMusic = async () => {
                try {
                    const videoArr = await getMusic();
                    setMusic(videoArr);
                } catch (err){
                    setError("Failed to load videos...");
                }
                finally{
                    setLoading(false);
                }
            }
    
            loadMusic();
        }, []);  

    if (loading) {
        return (<LoadingScreen/>);
    }

    if (error) {
        return (<div className="videopage"><h1>{error}</h1></div>);
    }

    console.log(music);

    return <div className="music" id="top">
        <div className="musictable">
            {music.map((music) => (
                <MusicSection key = {music.id}
                music = {music}
                />
            ))}
        </div>
    </div>
}

export default Music;