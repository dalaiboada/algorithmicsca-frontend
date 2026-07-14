import { useState } from 'react';

export const useImage = (primarySrc, fallbackSrc) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => setIsLoading(false);

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return {
    src: hasError ? fallbackSrc : primarySrc,
    isLoading,
    hasError,
    handleLoad,
    handleError,
  };
};

export default useImage;
