import React, { FC, ReactNode } from 'react';

import Footer from '../Footer';

interface Layout {
  children?: ReactNode;
}

export const Layout: FC<Layout> = ({ children }): JSX.Element => (
  <div className='flex flex-col h-screen bg-gradient-to-b from-dark via-dark-secondary to-dark'>
    <main className='xl:container xl:mx-auto h-full'>{children}</main>
    <Footer footerText={'thom app'} />
  </div>
);
