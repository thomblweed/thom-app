import { useMemo } from 'react';

const useMemoState = <T>(state: T, setStatus: (state: T) => void): void => {
  useMemo(() => {
    setStatus(state);
  }, [state]);
};

export { useMemoState };
