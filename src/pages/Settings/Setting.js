const Settings = () => {
  return (
    <div>
      <h2 className="text-2xl city-header text-center">Settings</h2>
      <div className="flex justify-center">
        <div>
          <h3>Temperature Units</h3>
          <div className="form-check">
            <input
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              checked
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="flexRadioDefault1">
              Clesius C
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="flexRadioDefault2">
              Farenheit F
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div>
          <h3>Wind Speed Units</h3>
          <div className="form-check">
            <input
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              checked
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="flexRadioDefault1">
              Clesius C
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="flexRadioDefault2">
              Farenheit F
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
