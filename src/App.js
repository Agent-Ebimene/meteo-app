import './App.css';
import { useState, useEffect } from 'react';
import CityInput from './components/CityInput';
import SingleCity from './components/SingleCity';
import cities from './gradovi.json';

function App() {
  const [cityInput, setCityInput] = useState('');
  const filteredCities = cityInput ? cities.filter((item) => item.city.includes(cityInput)) : null;
  const getWeatherVariables = async () => {
    const weatherResponse = await fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=52.5235&longitude=13.4115&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum,showers_sum&temperature_unit=fahrenheit&windspeed_unit=ms&precipitation_unit=inch&timezone=America%2FDenver&past_days=2'
    );
    const responseData = await weatherResponse.json();
    console.log(responseData);
  };
  useEffect(() => {
    getWeatherVariables();
  }, []);

  return (
    <div className="flex flex-col justify-center p-5">
      <h1 className="  text-center text-4xl m-5">Meteo App</h1>
      <CityInput />
      <SingleCity />
    </div>
  );
}

export default App;
