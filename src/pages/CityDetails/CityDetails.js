import { useContext, useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { AppContext } from '../../context/AppContext';

import Favourites from '../../components/Favourites';
import SettingsButton from '../Settings/SettingButton';
import FavouritesButton from '../../components/FavouritesButton';
import LoadingSpinner from '../../components/LoadingSpinner';
import HourlyDetails from '../../components/HourlyDetails';
import DailyDetails from '../../components/DailyDetails';
import { getFocastUrl } from '../../services/services';

const CityDetails = () => {
  const {
    city: { city, lat, lng }
  } = useLocation().state;

  const { showFavouritesPage } = useContext(AppContext);

  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [selectedInterval, setSelectedInterval] = useState('');

  const getWeatherVariables = useCallback(async (url) => {
    setIsLoading(true);
    try {
      const weatherResponse = await fetch(url);
      const responseData = await weatherResponse.json();
      setWeatherData(responseData);
    } catch (error) {
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);



  useEffect(() => {
    
    if (selectedInterval) {
      const url = getFocastUrl({ type: selectedInterval, lat, lng });
      getWeatherVariables(url);
    }
  }, [selectedInterval, lat, lng, getWeatherVariables]);

  const handleSelectInterval = (e) => setSelectedInterval(e.target.value);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="flex flex-row space-between">
          {!showFavouritesPage && <FavouritesButton />}
          <SettingsButton />

          {showFavouritesPage && <Favourites />}
          <div className="city-details  my-5 px-3 flex flex-col items-center w-full py-2">
            <h2 className="text-2xl city-header text-center mt-20">Meteorologic data for {city}</h2>
            <select
              className="w-1/2 h-8 cursor-pointer rounded select-btn text-2xl"
              value={selectedInterval}
              onChange={handleSelectInterval}>
              <option value="daily" className="select-item">
                Daily View
              </option>
              <option value="hourly" className=" select-item">
                Hourly View
              </option>
            </select>
            {selectedInterval === 'hourly' && <HourlyDetails weatherData={weatherData} />}
            {selectedInterval === 'daily' && <DailyDetails weatherData={weatherData} />}
          </div>
        </div>
      )}
    </>
  );
};

export default CityDetails;
