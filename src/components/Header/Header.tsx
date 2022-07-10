import React, { useContext } from 'react';

import { DeviceContext } from '~/state/context/DeviceContext';
import { DesktopHeader } from './desktop/DesktopHeader';
import { MobileHeader } from './mobile/MobileHeader';

export const Header = () => {
  const device = useContext(DeviceContext);

  return (
    <>
      {(device === 'desktop' || device === 'tablet') && <DesktopHeader />}
      {device === 'mobile' && <MobileHeader />}
    </>
  );
};
