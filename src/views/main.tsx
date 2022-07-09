import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '~/components/Header';
import { DeviceProvider } from '~/state/provider/DeviceProvider';

export const Main = (): JSX.Element => (
  <div data-testid='main-view'>
    <DeviceProvider>
      <Header />
    </DeviceProvider>
    <Outlet />
  </div>
);
