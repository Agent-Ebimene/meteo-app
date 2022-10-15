import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';
import Home from './pages/Home/Home';
import CityDetails from './pages/CityDetails/CityDetails';

function App() {
  const { weatherData, loading, setLoading, setWeatherData } = useContext(AppContext);
  const handleGetWeatherVariables = async (city, interval) => {
    setLoading(true);
    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lng}&${interval}=temperature_2m,relativehumidity_2m,dewpoint_2m,weathercode,pressure_msl,surface_pressure,windspeed_10m,windspeed_80m,windspeed_120m,soil_temperature_0cm,soil_temperature_6cm,soil_temperature_18cm`
    );
    if (weatherResponse.ok) {
      const responseData = await weatherResponse.json();
      setWeatherData(responseData);
      setLoading(false);
      console.log(weatherData);
    } else {
      throw 'Error getting Weather variables';
    }
  };
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="details/:city"
        element={<CityDetails handleGetWeatherVariables={handleGetWeatherVariables} />}
      />
    </Routes>
  );
}

export default App;
