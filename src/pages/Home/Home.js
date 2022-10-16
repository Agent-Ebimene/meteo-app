import { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import cities from '../../gradovi.json';
import CityInput from '../../components/CityInput';
import SingleCity from '../../components/SingleCity';
import Favourites from '../../components/Favourites';
import FavouritesButton from '../../components/FavouritesButton';
import SettingsButton from '../Settings/SettingButton';

const Home = () => {
  const [cityInput, setCityInput] = useState('');
  const { showFavouritesPage } = useContext(AppContext);
  const handleSearchCity = (value) => {
    setCityInput(value);
  };

  const handleChangeValue = (e) => {
    setCityInput(e.target.value);
  };

  return (
    <div className="flex flex-row space-between ">
      {!showFavouritesPage && <FavouritesButton />}
      <SettingsButton />
      {showFavouritesPage && <Favourites />}
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
            <SingleCity key={index} city={city} />
          ))}
      </div>
    </div>
  );
};

export default Home;
