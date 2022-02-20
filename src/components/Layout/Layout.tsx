import React, { FC, ReactNode } from 'react';

import './layout.scss';
import Footer from '../Footer';

interface Layout {
  children?: ReactNode;
}

const Layout: FC<Layout> = ({ children }): JSX.Element => (
  <div className='root'>
    <main className='main'>{children}</main>
    <Footer footerText={'thom app'} />
  </div>
);

export { Layout };
