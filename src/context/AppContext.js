import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState();
  const [favourites, setFavourites] = useState([]);
  const [showFavouritesPage, setShowFavouritesPage] = useState(false);

  const handleFavouritesPage = () => {
    setShowFavouritesPage(true);
  };

  const handleRemoveFavouritesPage = () => {
    setShowFavouritesPage(false);
  };

  const handleAddToFavourites = (city) => {
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
        showFavouritesPage,
        favourites,
        setWeatherData,
        handleFavouritesPage,
        handleRemoveFavouritesPage,
        handleAddToFavourites,
        handleDeleteFromFavourites
      }}>
      {children}
    </AppContext.Provider>
  );
};
