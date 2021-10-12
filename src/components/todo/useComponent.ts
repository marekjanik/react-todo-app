import { useState } from 'react';

type UseComponentType = {
  isCompleted: boolean;
  onCompleteTodo: VoidFunction;
};

export const useComponent = (): UseComponentType => {
  const [isCompleted, setIsCompleted] = useState(false);

  const onCompleteTodo = () => {
    setIsCompleted(!isCompleted);
  };

  return {
    isCompleted,
    onCompleteTodo,
  };
};
