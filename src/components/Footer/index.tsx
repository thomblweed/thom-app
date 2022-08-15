import React, { ReactElement } from 'react';

interface FooterProps {
  footerText: string;
}

const Footer = ({ footerText }: FooterProps): ReactElement => (
  <footer className='bg-gradient-to-t from-dark-grey py-4'>
    <div className='mx-auto w-11/12 max-w-screen-xl'>
      <p className='text-alternate'>{footerText}</p>
      <p className='text-xs text-secondary'>
        Copyright &copy; {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);

export default Footer;
