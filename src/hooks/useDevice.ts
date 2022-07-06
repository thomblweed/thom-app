import { useMemo } from 'react';
import { useWindowSize } from './useWindowSize';

type Device = 'mobile' | 'tablet' | 'desktop';

export const useDevice = () => {
  const { width, height } = useWindowSize();

  return useMemo<Device>(() => {
    if (width < 480 || height < 480) {
      return 'mobile';
    } else if (
      (width > 480 && width < 768) ||
      (height > 481 && width < 768) ||
      (height > 767 && width < 1025)
    ) {
      return 'tablet';
    } else {
      return 'desktop';
    }
  }, [width, height]);
};
