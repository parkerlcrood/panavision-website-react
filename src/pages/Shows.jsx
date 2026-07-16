import '../../css/style.css';
import {useState, useEffect} from "react";
import { getShows } from '../services/api';
import BackToTop from '../components/BackToTop';
import CoverVideo from '../components/CoverVideo';
import ShowInfoItem from '../components/ShowInfoItem';
import ShowSampleItem from '../components/ShowSampleItem';

function Shows() {

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [pastShows, setPastShows] = useState([]);
    const [upcomingShows, setUpcomingShows] = useState([]);

    const fetchShows = async () => {
        const showsObj = await getShows();
        const pastShowsArr = showsObj.pastShows;
        const upcomingShowsArr = showsObj.upcomingShows;
        setPastShows(pastShowsArr);
        setUpcomingShows(upcomingShowsArr);
    };
    
    useEffect(() => {
        const loadShows = async () => {
            try {
                const showsObj = await getShows();
                const pastShowsArr = showsObj.pastArr;
                const upcomingShowsArr = showsObj.upcomingArr;
                setPastShows(pastShowsArr);
                setUpcomingShows(upcomingShowsArr);
            } catch (err){
                setError("Failed to load shows...");
            }
            finally{
                setLoading(false);
            }
        }
        loadShows();
    }, []);

    return <div className="upcomingshows" id="top">
        <CoverVideo/>
        <main id="top" className="mainlike">
            <article className="container">
                <div className="cardtitle">
                    <h2>Shows</h2>
                </div>
                <div className='showTable'>
                    
                    <p className='showTableTitle'>Upcoming</p>
                    <ShowSampleItem/>
                    {upcomingShows.map((show) => (
                        <ShowInfoItem key={show}
                        show = {show}
                        />
                    ))}
                </div>
                <div className='showTable'>
                    
                    <p className='showTableTitle'>Past</p>
                    <ShowSampleItem/>
                    {pastShows.map((show) => (
                        <ShowInfoItem key={show.id}
                        show = {show}
                        />
                    ))}
                </div>
            </article>
            <BackToTop/>
        </main>
    </div>
}

export default Shows;