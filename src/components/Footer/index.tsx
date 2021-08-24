import React, { ReactElement } from 'react';
import { Text } from '@chakra-ui/react';

import Container from '../Container';

interface FooterProps {
  footerText: string;
}

const footerCss = {
  background: '#eeeeee',
  padding: '1rem'
};

const Footer = ({ footerText }: FooterProps): ReactElement => (
  <footer style={footerCss}>
    <Container size='large'>
      <Text fontSize='md'>{footerText}</Text>
      <Text fontSize='sm'>Copyright &copy; {new Date().getFullYear()}</Text>
    </Container>
  </footer>
);

export default Footer;
