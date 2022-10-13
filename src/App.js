import './App.css';
import { useState } from 'react';
import CityInput from './components/CityInput';
import SingleCity from './components/SingleCity';
import cities from './gradovi.json';

function App() {
  const [cityInput, setCityInput] = useState('');
  const [favourites, setFavourites] = useState([]);
  const handleSearchCity = (value) => {
    setCityInput(value);
  };
  const handleChangeValue = (e) => {
    setCityInput(e.target.value);
    console.log('Search input');
  };

  // const getWeatherVariables = async () => {
  //   const weatherResponse = await fetch(
  //     'https://api.open-meteo.com/v1/forecast?latitude=52.5235&longitude=13.4115&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum,showers_sum&temperature_unit=fahrenheit&windspeed_unit=ms&precipitation_unit=inch&timezone=America%2FDenver&past_days=2'
  //   );
  //   const responseData = await weatherResponse.json();
  //   console.log(responseData);
  // };
  const handleAddToFavourites = (city) => {
    console.log(city);
    setFavourites([...favourites, city]);
    console.log(favourites);
  };

  return (
    <div className="flex flex-col justify-center p-5">
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
          <SingleCity key={index} city={city} handleAddToFavourites={handleAddToFavourites} />
        ))}
    </div>
  );
}

export default App;
