import { useEffect, useRef } from 'react';

const usePreviousState = <T>(fn: (currentState: T[]) => void, state: T[]) => {
  const previousState = useRef<T[]>([...state]);

  useEffect(() => {
    fn(previousState.current);
    previousState.current = [...state];
  }, [state]);
};

export { usePreviousState as useMultiState };
