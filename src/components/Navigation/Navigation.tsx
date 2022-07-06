import React, { FC, ReactNode } from 'react';

type NavContent = {
  value: string;
  route: string;
};

type Navigation = {
  items: Array<NavContent>;
  content: (props: NavContent) => ReactNode;
};

export const Navigation: FC<Navigation> = ({ items, content }) => (
  <nav className=''>
    <ul className='flex'>
      {items.map(({ value, route }) => (
        <li className='px-2' key={value}>
          {content({ value, route })}
        </li>
      ))}
    </ul>
  </nav>
);
