import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState();
  return (
    <AppContext.Provider
      value={{
        weatherData,
        setWeatherData
      }}>
      {children}
    </AppContext.Provider>
  );
};
