import { useContext } from 'react';
import { GrFavorite } from 'react-icons/gr';
import { AppContext } from '../context/AppContext';

const FavouritesButton = ({ text }) => {
  const { handleFavouritesPage } = useContext(AppContext);
  return (
    <div
      className="flex h-12 w-60 flex-row fixed right-1 text-2xl space-x-4 cursor-pointer bg-slate-500 rounded items-center justify-center add-favourite-btn"
      onClick={handleFavouritesPage}>
      <h2>Favourites</h2>
      <GrFavorite className="text-white" />
    </div>
  );
};

export default FavouritesButton;
