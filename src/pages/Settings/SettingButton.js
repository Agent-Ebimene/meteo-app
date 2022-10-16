import { useContext } from 'react';
import { FiSettings } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { AppContext } from '../../context/AppContext';

const SettingsButton = () => {
  const { showFavouritesPage } = useContext(AppContext);
  const navigate = useNavigate();
  const handleSettingsPage = () => {
    navigate('/settings');
  };

  return (
    <div
      className={`flex h-12 w-60 flex-row fixed right-1 top-14 text-2xl space-x-4 cursor-pointer bg-slate-500 rounded items-center justify-center add-favourite-btn ${
        showFavouritesPage ? 'settings-btn' : ''
      }`}
      onClick={handleSettingsPage}>
      <h2>Settings </h2>
      <FiSettings className="text-white settings-icon" />
    </div>
  );
};

export default SettingsButton;
