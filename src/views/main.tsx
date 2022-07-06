import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '~/components/Header';

export const Main = (): JSX.Element => (
  <div data-testid='main-view'>
    <Header />
    <Outlet />
  </div>
);
