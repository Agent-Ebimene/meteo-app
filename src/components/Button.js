import { GrFavorite } from 'react-icons/gr';

const Button = ({ handleFavouritePage }) => {
  return (
    <div
      className="flex h-12 w-60 flex-row fixed right-0 text-2xl space-x-4 cursor-pointer bg-slate-500 rounded items-center justify-center add-favourite-btn"
      onClick={handleFavouritePage}>
      <h2>Favourites</h2>
      <GrFavorite className="text-white" />
    </div>
  );
};

export default Button;