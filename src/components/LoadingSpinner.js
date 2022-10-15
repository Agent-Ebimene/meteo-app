import ClipLoader from 'react-spinners/ClipLoader';
const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <ClipLoader color="#929292" size={80} aria-label="Loading Spinner" />
    </div>
  );
};

export default LoadingSpinner;
