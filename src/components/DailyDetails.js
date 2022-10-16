const DailyDetails = ({ weatherData }) => {
  return (
    <div className="flex flex-col sm:my-3 space-x-6 my-12 px-2">
      <div>
        <h3>Weathercode</h3>
        <h3>Maximum Temperature (2 m)</h3>
        <h3>Minimum Temperature (2 m)</h3>
      </div>
      <div>
        <h3>Precipitation Sum</h3>
        <h3>Precipitation Hours</h3>
        <h3>maximum Wind Speed (10 m)</h3>
      </div>
    </div>
  );
};

export default DailyDetails;
