import starIcon from '../assets/images/star.png';
import useMeteo from '../hooks/useMeteo';
const SingleCity = ({ city }) => {
  const { handleAddToFavourites } = useMeteo();
  return (
    <div className="city">
      <h2>{city.city}</h2>
      <img src={starIcon} alt="city name" onClick={() => handleAddToFavourites(city)}></img>
    </div>
  );
};

export default SingleCity;
