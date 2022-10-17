const HourlyDetails = ({ weatherData }) => {
  console.log(weatherData);
  return (
    <div className="f  sm:my-5  my-12 px-2  weather-details">
      <div className="px-1">
        <h3>Temperature (2 m):</h3>
        <h3>Relative humidity (2 m)</h3>
        <h3 className="flex flex-wrap">
          Dew Point (2 m):{weatherData?.hourly?.dewpoint_2m.toString()}
        </h3>
      </div>
      <div className="px-1">
        <h3>Cloudcover Total</h3>
        <h3>Cloudcover Low</h3>
        <h3>Cloudcover Mid</h3>
      </div>
      <div className="px-1">
        <h3>Wind Speed (10 m)</h3>
        <h3>Wind Speed (80 m)</h3>
        <h3>Wind Speed (120 m)</h3>
      </div>
      <div>
        <h3>Soil Temperature (0 cm)</h3>
        <h3>Soil Temperature (6 cm)</h3>
        <h3>Soil Temperature (18 cm)</h3>
      </div>
    </div>
  );
};

export default HourlyDetails;
