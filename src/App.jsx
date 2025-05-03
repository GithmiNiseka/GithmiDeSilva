import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import SignifyCS from './components/signifyCSPage'; 
import FarmoidCS from './components/farmoidCSPage';
import BusCS from './components/BusCS';
import MealMapCS from './components/mealMapCS';
import DaladaCS from './components/daladaCSPage';
import './index.css';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const basename = '/GithmiDeSilva'; // Match your repository name exactly

  return (
    <Router basename={basename}>
      <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
        <div className="app-container">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/signify-case-study" element={<SignifyCS />} />
            <Route path="/farmoid-case-study" element={<FarmoidCS />} />
            <Route path="/bus-case-study" element={<BusCS />} />
            <Route path="/mealmap-case-study" element={<MealMapCS />} />
            <Route path="/dalada-case-study" element={<DaladaCS />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}