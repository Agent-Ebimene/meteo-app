import React, { useState } from 'react';
const useMeteo = () => {
  const [cityInput, setCityInput] = useState('');
  const [favourites, setFavourites] = useState([]);
  const handleSearchCity = (value) => {
    setCityInput(value);
  };
  const handleChangeValue = (e) => {
    setCityInput(e.target.value);
    console.log('Search input');
  };
  const handleAddToFavourites = (city) => {
    console.log(city);
    setFavourites([...favourites, city]);
    console.log(favourites);
  };

  return {
    cityInput,
    handleChangeValue,
    handleAddToFavourites,
    handleSearchCity
  };
};

export default useMeteo;
