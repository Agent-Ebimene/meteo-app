import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState();
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFavouritePage, setIsFavouritePage] = useState(false);
  const handleFavouritePage = () => {
    setIsFavouritePage(true);
  };
  const handleRemoveFavouritePage = () => {
    setIsFavouritePage(false);
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
        isFavouritePage,
        favourites,
        loading,
        setLoading,
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
