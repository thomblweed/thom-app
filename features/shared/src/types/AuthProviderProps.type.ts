import { ReactNode } from 'react';

export type AuthProviderProps = {
  children: ReactNode;
};

export type AuthProviderState = (props: AuthProviderProps) => JSX.Element;
