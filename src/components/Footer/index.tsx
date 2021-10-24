import React, { ReactElement } from 'react';
import { Container } from 'thom-components';

import './footer.scss';

interface FooterProps {
  footerText: string;
}

const Footer = ({ footerText }: FooterProps): ReactElement => (
  <footer className='footer'>
    <Container size='large'>
      <p className='footerName'>{footerText}</p>
      <p className='copyright'>Copyright &copy; {new Date().getFullYear()}</p>
    </Container>
  </footer>
);

export default Footer;
