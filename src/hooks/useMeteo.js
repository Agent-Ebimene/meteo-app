import { useState } from 'react';

const useMeteo = () => {
  const [cityInput, setCityInput] = useState('');

  const handleSearchCity = (value) => {
    setCityInput(value);
  };
  const handleChangeValue = (e) => {
    setCityInput(e.target.value);
  };

  return {
    handleChangeValue,
    handleSearchCity
  };
};

export default useMeteo;
