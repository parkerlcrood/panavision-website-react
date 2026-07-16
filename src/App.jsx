import '../css/style.css';
import {Routes, Route} from "react-router-dom";
import { useState } from 'react';
import MerchPage from './pages/MerchPage';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import Videos from './pages/Videos';
import NavBar from './components/NavBar';
import FooterBar from './components/FooterBar';
import Music from './pages/Music';
import About from './pages/About';
import Contact from './pages/Contact';
import Shows from './pages/Shows';
import MerchDetailPage from "./components/MerchDetailPage";
import Login from './pages/Login';
import Admin from './pages/Admin';
import ProtectedRoute from './pages/ProtectedRoute';
import Cart from './pages/Cart';

function App() {

  const [cart, setCart] = useState([]);

  return (
    <>
    <div>
      
      <main className="main-content">
          <NavBar cart={cart}/>
          <Routes>
            <Route path="/" element={<><Home/></>} />
            <Route path="/videos" element={<><Videos/></>} />
            <Route path="/music" element={<><Music/></>} />
            <Route path="/about" element={<><About/></>} />
            <Route path="/contact" element={<><Contact/></>} />
            <Route path="/merchpage" element={<><MerchPage cart={cart} setCart={setCart}/></>}/>
            <Route path="/shows" element={<><Shows/></>} />
            <Route path="/favorites" element={<><Favorites/></>} />
            <Route path="/cart" element={<><Cart cart={cart} setCart={setCart}/></>} />
            <Route path="/merch/:id" element={<><MerchDetailPage/></>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/admin" element={
              <ProtectedRoute>
                <Admin/>
              </ProtectedRoute>
              } />
          </Routes>
      </main>
      <FooterBar/>
    </div>
    </>
  );
}


export default App;
