import React, { useContext, Suspense, lazy } from 'react';

import { DeviceContext } from '~/state/context/DeviceContext';
const DesktopHeader = lazy(() => import('./desktop/DesktopHeader'));
const MobileHeader = lazy(() => import('./mobile/MobileHeader'));

export const Header = () => {
  const device = useContext(DeviceContext);

  return (
    <>
      {device === 'desktop' || device === 'tablet' ? (
        <Suspense>
          <DesktopHeader />
        </Suspense>
      ) : null}
      {device === 'mobile' ? (
        <Suspense>
          <MobileHeader />
        </Suspense>
      ) : null}
    </>
  );
};
