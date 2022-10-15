import { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';

const CityDetails = () => {
  const [selected, setSelected] = useState(null);
  const { weatherData } = useContext(AppContext);
  return (
    <div className="city-details  my-10 px-10 ">
      <h2 className="text-6xl city-header">Meteorologic data for {weatherData.city}</h2>
      <select
        className="w-1/2 h-8 cursor-pointer rounded select-btn"
        value={selected}
        onChange={() => setSelected(selected)}>
        <option value="daily" className="select-item">
          Daily View
        </option>
        <option value="hourly" className=" select-item">
          Hourly View
        </option>
      </select>

      <h2>{weatherData.longitude}</h2>
      <h2>{weatherData.timezone_abbreviation}</h2>
      <h2>{weatherData.timezone}</h2>
    </div>
  );
};

export default CityDetails;
