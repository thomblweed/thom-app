import React, { ReactElement } from 'react';

interface FooterProps {
  footerText: string;
}

const Footer = ({ footerText }: FooterProps): ReactElement => (
  <footer className='bg-alternate py-4'>
    <div className='xl:container xl:mx-auto'>
      <p>{footerText}</p>
      <p className='text-xs'>Copyright &copy; {new Date().getFullYear()}</p>
    </div>
  </footer>
);

export default Footer;
