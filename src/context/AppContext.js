import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState();
  const [favourites, setFavourites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showFavouritePage, setShowFavouritePage] = useState(false);
  const handleFavouritePage = () => {
    setShowFavouritePage(true);
  };
  const handleRemoveFavouritePage = () => {
    setShowFavouritePage(false);
  };
  const handleAddToFavourites = (city) => {
    console.log(favourites);
    if (!(favourites.filter((item) => item.city === city.city).length > 0)) {
      setFavourites([...favourites, { ...city }]);
    }
  };
  const handleDeleteFromFavourites = (city) => {
    const remainingFavourites = favourites.filter((item) => item.city !== city);
    setFavourites(remainingFavourites);
  };
  return (
    <AppContext.Provider
      value={{
        weatherData,
        showFavouritePage,
        favourites,
        isLoading,
        setIsLoading,
        setWeatherData,
        handleFavouritePage,
        handleRemoveFavouritePage,
        handleAddToFavourites,
        handleDeleteFromFavourites
      }}>
      {children}
    </AppContext.Provider>
  );
};
