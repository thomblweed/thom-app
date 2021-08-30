import React, { FC } from 'react';

import './layout.css';
import Footer from '../Footer';
import Container from '../Container';

interface Layout {
  children?: any;
}

const Layout: FC<Layout> = ({ children }): JSX.Element => (
  <div className='root'>
    <Container type='main' size='large'>
      {children}
    </Container>
    <Footer footerText={'thom app'} />
  </div>
);

export default Layout;
