import './App.css';
import { Routes, Route } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext';
import Home from './pages/Home/Home';
import CityDetails from './pages/CityDetails/CityDetails';

function App() {
  return (
    <AppContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details/:city" element={<CityDetails />} />
      </Routes>
    </AppContextProvider>
  );
}

export default App;
