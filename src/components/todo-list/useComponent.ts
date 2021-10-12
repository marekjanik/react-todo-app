import { useState } from 'react';

export const useComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  const displayTodos = () => {
    const isLoadingId = setTimeout(() => {
      setIsLoading(false);
    }, 10000);
    return () => {
      clearTimeout(isLoadingId);
    };
  };

  displayTodos();

  return {
    isLoading,
  };
};
