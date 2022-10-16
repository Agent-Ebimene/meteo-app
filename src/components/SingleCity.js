import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import starIcon from '../assets/images/star.png';
import { AppContext } from '../context/AppContext';

const SingleCity = ({ city }) => {
  const { handleAddToFavourites } = useContext(AppContext);
  const navigate = useNavigate();

  const { city: cityName } = city;

  const addTofavourites = () => handleAddToFavourites(city);

  return (
    <div className="city">
      <div
        className="cursor-pointer"
        onClick={() => {
          navigate(`details/${cityName}`, { state: { city } });
        }}>
        {' '}
        <h2>{cityName}</h2>
      </div>

      <img
        src={starIcon}
        className="cursor-pointer"
        alt="city name"
        onClick={addTofavourites}></img>
    </div>
  );
};

export default SingleCity;
