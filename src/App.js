import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import CityDetails from './pages/CityDetails/CityDetails';
import Settings from './pages/Settings/Setting';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="details/:city" element={<CityDetails />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;
