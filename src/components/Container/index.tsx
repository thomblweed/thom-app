import React, { FC, ReactNode } from 'react';

type SizeValues = '165ch' | '90ch' | '60ch';

const containerCss = (size: SizeValues) => ({
  width: '100%',
  'margin-inline-start': 'auto',
  'margin-inline-end': 'auto',
  'max-width': size,
  'padding-inline-start': '1rem',
  'padding-inline-end': '1rem'
});

const sizes: Record<string, SizeValues> = {
  large: '165ch',
  medium: '90ch',
  small: '60ch'
};

interface ContainerProps {
  children: ReactNode;
  size?: 'large' | 'medium' | 'small';
}

const Container = ({ children, size }: ContainerProps): JSX.Element => (
  <div style={containerCss(size ? sizes[size] : '90ch')}>{children}</div>
);

export default Container;
