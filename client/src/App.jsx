import '../css/style.css';
import MerchPage from './pages/MerchPage';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import Videos from './pages/Videos';
import {Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar';
import FooterBar from './components/FooterBar';
import Music from './pages/Music';
import About from './pages/About';
import Contact from './pages/Contact';
import UpcomingShows from './pages/UpcomingShows';
import MerchDetailPage from "./components/MerchDetailPage";

function App() {
  return (
    <>
    <div>
      <NavBar/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/videos" element={<Videos/>} />
          <Route path="/music" element={<Music/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/merchpage" element={<MerchPage/>}/>
          <Route path="/upcomingshows" element={<UpcomingShows/>} />
          <Route path="/favorites" element={<Favorites/>} />
          <Route path="/merch/:id" element={<MerchDetailPage/>} />
        </Routes>
      </main>
      <FooterBar/>
    </div>
    </>
  );
}


export default App;
