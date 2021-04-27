import { useMemo } from 'react';
import { Status } from './useAxios';

const useMemoState = <T>(state: T, setStatus: (state: T) => void): void => {
  useMemo(() => {
    state && setStatus(state);
  }, [state]);
};

export { useMemoState };
