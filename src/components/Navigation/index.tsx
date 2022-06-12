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
  <nav>
    <ul>
      {items.map(({ value, route }) => (
        <li key={value}>{content({ value, route })}</li>
      ))}
    </ul>
  </nav>
);
