import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import cities from '../../gradovi.json';
import CityInput from '../../components/CityInput';
import SingleCity from '../../components/SingleCity';
import Favourites from '../../components/Favourites';
import Button from '../../components/Button';

const Home = () => {
  const [cityInput, setCityInput] = useState('');
  const [favourites, setFavourites] = useState([]);

  const [isFavouritePage, setIsFavouritePage] = useState(false);
  const { weatherData, setWeatherData } = useContext(AppContext);
  const handleSearchCity = (value) => {
    setCityInput(value);
  };
  const navigate = useNavigate();
  const handleChangeValue = (e) => {
    setCityInput(e.target.value);
    console.log('Search input');
  };
  const handleFavouritePage = () => setIsFavouritePage(true);
  const handleRemoveFavouritePage = () => {
    setIsFavouritePage(false);
  };

  const handleGetWeatherVariables = async (city) => {
    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lng}&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,weathercode,pressure_msl,surface_pressure,windspeed_10m,windspeed_80m,windspeed_120m,soil_temperature_0cm,soil_temperature_6cm,soil_temperature_18cm`
    );
    if (weatherResponse.ok) {
      const responseData = await weatherResponse.json();
      setWeatherData(responseData);
      console.log(weatherData);
      navigate(`details/${city.city}`);
    } else {
      throw 'Error getting Weather variables';
    }
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
      {!isFavouritePage && <Button handleFavouritePage={handleFavouritePage} />}
      {isFavouritePage && (
        <Favourites
          favourites={favourites}
          handleDeleteFromFavourites={handleDeleteFromFavourites}
          handleRemoveFavouritePage={handleRemoveFavouritePage}
          getCityWeatherDetails={handleGetWeatherVariables}
          isFavouritePage={isFavouritePage}
        />
      )}
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
              handleGetDetails={handleGetWeatherVariables}
              handleAddToFavourites={handleAddToFavourites}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
