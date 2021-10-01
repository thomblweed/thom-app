import React, { ReactElement } from 'react';
import { Container } from 'thom-components';

interface FooterProps {
  footerText: string;
}

const footerCss = {
  background: '#935D7E',
  padding: '1rem 0'
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
