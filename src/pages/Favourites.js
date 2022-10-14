import React from 'react';
// import useMeteo from '../hooks/useMeteo';

import { FaTimes } from 'react-icons/fa';

const Favourites = ({ favourites, handleDeleteFromFavourites }) => {
  console.log('re-rendered');

  return (
    <div className="py-10 favourites px-3">
      <h2 className=" text-4xl text-white favourites-header ">Favourites</h2>

      {favourites.map((favourite, i) => (
        <div
          className="flex  h-12 space-around relative  items-center my-8 rounded  text-xl bg-slate-500"
          key={i}>
          <h3 className="text-white text-2xl px-1">{favourite.city} </h3>
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
