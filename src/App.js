import './App.css';
import cities from './gradovi.json';
import { useState, useEffect } from 'react';

import CityInput from './components/CityInput';
import SingleCity from './components/SingleCity';
import Favourites from './pages/Favourites';

function App() {
  const [cityInput, setCityInput] = useState('');
  const [favourites, setFavourites] = useState([]);
  const [weatherData, setWeatherData] = useState();
  // const { favourites } = useMeteo();
  const handleSearchCity = (value) => {
    setCityInput(value);
  };
  const handleChangeValue = (e) => {
    setCityInput(e.target.value);
    console.log('Search input');
  };

  const getWeatherVariables = async (city) => {
    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lng}&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum,showers_sum&temperature_unit=fahrenheit&windspeed_unit=ms&precipitation_unit=inch&timezone=America%2FDenver&past_days=2`
    );
    const responseData = await weatherResponse.json();
    setWeatherData(responseData);
    console.log(weatherData);
  };
  const handleAddToFavourites = (city) => {
    if (!(favourites.filter((item) => item.city === city.city).length > 0)) {
      setFavourites([...favourites, { ...city }]);
    }
  };
  const handleDeleteFromFavourites = (city) => {
    const remainingFavourites = favourites.filter((item) => item.city !== city);
    setFavourites(remainingFavourites);
  };

  return (
    <div className="flex flex-row space-between ">
      <Favourites favourites={favourites} handleDeleteFromFavourites={handleDeleteFromFavourites} />
      <div className="flex flex-col items-center w-full py-24">
        <h1 className="  text-center text-4xl m-5">Meteo App</h1>

        <CityInput
          cityInput={cityInput}
          handleChangeValue={handleChangeValue}
          handleSearchCity={handleSearchCity}
        />
        {cities
          .filter((item) => {
            const searchTerm = cityInput.trim().toLowerCase();
            const cityName = item.city.toLowerCase();
            return searchTerm && cityName.startsWith(searchTerm);
          })
          .slice(0, 5)
          .map((city, index) => (
            <SingleCity
              key={index}
              city={city}
              handleGetDetails={getWeatherVariables}
              handleAddToFavourites={handleAddToFavourites}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
