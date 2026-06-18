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

function App() {
  return (
    <>
    <div>
      <NavBar/>
      <main className="main-content">
        <Routes>
          <Route path="/merchpage" element={<MerchPage/>}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/videos" element={<Videos/>}></Route>
          <Route path="/music" element={<Music/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/upcomingshows" element={<UpcomingShows/>}></Route>
          <Route path="/favorites" element={<Favorites/>}></Route>
        </Routes>
        <FooterBar/>
      </main>
    </div>
    </>
  );
}


export default App;
