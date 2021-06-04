import { MutableRefObject, useEffect, useRef } from 'react';

const usePreviousState = <T>(fn: (currentState: T[]) => void, state: T[]) => {
  const previousState: MutableRefObject<T[]> = useRef<T[]>([...state]);

  useEffect(() => {
    fn(previousState.current);
    previousState.current = [...state];
  }, [state]);
};

export { usePreviousState as useMultiState };
