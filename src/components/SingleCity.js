import starIcon from '../assets/images/star.png';

const SingleCity = ({ city, handleGetDetails, handleAddToFavourites }) => {
  return (
    <div className="city">
      <div
        className="cursor-pointer"
        onClick={() => {
          handleGetDetails(city);
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
