import React, { ReactElement } from 'react';

import Container from '../Container';

interface FooterProps {
  footerText: string;
}

const footerCss = {
  background: '#eeeeee',
  padding: '1rem'
};

const footerNameCss = {
  fontSize: '1rem'
};

const footerCopyCss = {
  fontSize: '0.875rem'
};

const Footer = ({ footerText }: FooterProps): ReactElement => (
  <footer style={footerCss}>
    <Container size='large'>
      <p style={footerNameCss}>{footerText}</p>
      <p style={footerCopyCss}>Copyright &copy; {new Date().getFullYear()}</p>
    </Container>
  </footer>
);

export default Footer;
