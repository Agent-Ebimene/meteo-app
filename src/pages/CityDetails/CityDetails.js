import { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { AppContext } from '../../context/AppContext';
import Favourites from '../../components/Favourites';
import Button from '../../components/Button';
import LoadingSpinner from '../../components/LoadingSpinner';

const CityDetails = ({ handleGetWeatherVariables }) => {
  const { city } = useLocation().state;

  const [selected, setSelected] = useState('');

  const { showFavouritePage, isLoading } = useContext(AppContext);
  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="flex flex-row space-between">
          {!showFavouritePage && <Button />}
          {showFavouritePage && <Favourites />}
          <div className="city-details  my-5 px-3 flex flex-col items-center w-full py-2">
            <h2 className="text-2xl city-header text-center">Meteorologic data for {city.city}</h2>
            <select
              className="w-1/2 h-8 cursor-pointer rounded select-btn text-2xl"
              value={selected}
              onChange={(e) => {
                setSelected(e.target.value);
                if (!selected) {
                  handleGetWeatherVariables(city, selected);
                }
              }}>
              <option value="daily" className="select-item">
                Daily View
              </option>
              <option value="hourly" className=" select-item">
                Hourly View
              </option>
            </select>
          </div>
        </div>
      )}
    </>
  );
};

export default CityDetails;
