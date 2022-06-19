import React, { FC, ReactNode } from 'react';

import Footer from '../Footer';

interface Layout {
  children?: ReactNode;
}

const Layout: FC<Layout> = ({ children }): JSX.Element => (
  <div className='flex flex-col h-screen'>
    <main className='xl:container xl:mx-auto h-full'>{children}</main>
    <Footer footerText={'thom app'} />
  </div>
);

export { Layout };
