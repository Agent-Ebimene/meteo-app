import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import starIcon from '../assets/images/star.png';
import { AppContext } from '../context/AppContext';

const SingleCity = ({ city }) => {
  const { handleAddToFavourites } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div className="city">
      <div
        className="cursor-pointer"
        onClick={() => {
          navigate(`details/${city.city}`, { state: { city } });
        }}>
        {' '}
        <h2>{city.city}</h2>
      </div>

      <img
        src={starIcon}
        className="cursor-pointer"
        alt="city name"
        onClick={() => handleAddToFavourites(city)}></img>
    </div>
  );
};

export default SingleCity;
