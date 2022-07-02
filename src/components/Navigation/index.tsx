import React, { FC, HTMLAttributes, ReactNode } from 'react';

type NavContent = {
  value: string;
  route: string;
};

type Navigation = {
  items: Array<NavContent>;
  content: (props: NavContent) => ReactNode;
};

export const Navigation: FC<Navigation & HTMLAttributes<HTMLElement>> = ({
  items,
  content,
  ...rest
}) => (
  <nav className='flex items-center' {...rest}>
    <ul className='flex flex-row md:flex-row md:space-x-4'>
      {items.map(({ value, route }) => (
        <li key={value}>{content({ value, route })}</li>
      ))}
    </ul>
  </nav>
);
