import React, { ReactElement } from 'react';
import { chakra, Container, Text } from '@chakra-ui/react';

interface FooterProps {
  footerText: string;
}

const FooterWrapper = chakra('footer', {
  baseStyle: {
    background: '#eeeeee;',
    padding: [4]
  }
});

const Footer = ({ footerText }: FooterProps): ReactElement => {
  return (
    <FooterWrapper>
      <Container maxW='container.xl'>
        <Text fontSize='md'>{footerText}</Text>
        <Text fontSize='sm'>Copyright &copy; {new Date().getFullYear()}</Text>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
