import React, { ReactNode } from 'react';

type SizeValues = '165ch' | '90ch' | '60ch';

const containerCss = (size: SizeValues) => ({
  width: '100%',
  'margin-inline-start': 'auto',
  'margin-inline-end': 'auto',
  'max-width': size,
  'padding-inline-start': '1rem',
  'padding-inline-end': '1rem'
});

const mainCss = {
  width: '100%',
  display: 'block',
  'box-sizing': 'border-box',
  'margin-left': 'auto',
  'margin-right': 'auto',
  'margin-top': 'auto',
  'margin-bottom': 'auto'
};

const sizes: Record<string, SizeValues> = {
  large: '165ch',
  medium: '90ch',
  small: '60ch'
};

interface ContainerProps {
  children: ReactNode;
  size?: 'large' | 'medium' | 'small';
  type?: 'main' | 'div';
}

const Container = ({
  children,
  size,
  type = 'div'
}: ContainerProps): JSX.Element => {
  return type === 'div' ? (
    <div style={containerCss(size ? sizes[size] : '90ch')}>{children}</div>
  ) : (
    <main style={mainCss}>{children}</main>
  );
};
export default Container;
