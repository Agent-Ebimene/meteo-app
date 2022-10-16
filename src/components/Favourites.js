import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

import { AppContext } from '../context/AppContext';
import SettingsButton from '../pages/Settings/SettingButton';

const Favourites = () => {
  const navigate = useNavigate();

  const { favourites, showFavouritesPage, handleDeleteFromFavourites, handleRemoveFavouritesPage } =
    useContext(AppContext);

  return (
    <div className={`py-10 favourites px-3  ${showFavouritesPage ? 'favourites-visible' : ''}`}>
      <h2 className=" text-4xl text-white favourites-header ">Favourites</h2>
      <SettingsButton />
      <FaTimes
        className="fixed top-12 right-10 text-3xl text-red-600 cursor-pointer close-btn"
        onClick={handleRemoveFavouritesPage}
      />
      {favourites.map((favourite, i) => (
        <div
          className="flex  h-12 space-around relative  items-center my-3 rounded  text-xl bg-slate-500"
          key={i}>
          <h3
            className="text-white text-2xl px-1 cursor-pointer"
            onClick={() => {
              navigate(`/details/${favourite.city}`, { state: { city: favourite } });
            }}>
            {favourite.city}
          </h3>
          <div>
            <FaTimes
              className="text-red-600 cursor-pointer absolute right-2 bottom-3"
              onClick={() => handleDeleteFromFavourites(favourite.city)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Favourites;
