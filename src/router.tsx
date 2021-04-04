import React, { FC, ReactNode, useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { AuthContext } from './state/authProvider';
import Main from './views/main';
import Login from './views/login';
import { Status } from './hooks/useAxios';

const PageNotFound = () => (
  <div>
    <p>Page not found</p>
  </div>
);

const Router = () => (
  <BrowserRouter>
    <Routes>
      <AuthRoute path='/' element={<Main />} />
      <Route path='/login' element={<Login />} />
      <Route path='/*' element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);

interface AuthRoute {
  path: string;
  element: JSX.Element;
  children?: ReactNode;
}

const AuthRoute: FC<AuthRoute> = ({ path, element, children }) => {
  const { user, userStatus } = useContext(AuthContext);

  if (userStatusBusy(userStatus)) return null;

  return user.id.length > 0 ? (
    <Route path={path} element={element}>
      {children}
    </Route>
  ) : (
    <Navigate to={'/login'} />
  );
};

const userStatusBusy = (userStatus: Status) => {
  return userStatus !== Status.DONE && userStatus !== Status.ERROR;
};

export default Router;
