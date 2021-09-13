import React, { ReactNode } from 'react';

type SizeValues = '165ch' | '90ch' | '60ch';

const containerCss = (size: SizeValues) =>
  ({
    width: '100%',
    marginInlineStart: 'auto',
    marginInlineEnd: 'auto',
    maxWidth: size,
    paddingInlineStart: '1rem',
    paddingInlineEnd: '1rem'
  } as const);

const mainCss = {
  width: '100%',
  display: 'block',
  boxSizing: 'border-box',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: 'auto',
  marginBottom: 'auto'
} as const;

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
  type = 'div',
  ...rest
}: ContainerProps): JSX.Element => {
  return type === 'div' ? (
    <div {...rest} style={containerCss(size ? sizes[size] : '90ch')}>
      {children}
    </div>
  ) : (
    <main {...rest} style={mainCss}>
      {children}
    </main>
  );
};

export default Container;
