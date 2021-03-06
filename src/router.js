import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { UserContext } from './state/userProvider';
import Main from './views/main';
import Login from './views/login';
import { DONE, ERROR } from './hooks/useAxios';

const PageNotFound = () => (
  <div>
    <p>Page not found</p>
  </div>
);

const Router = () => (
  <BrowserRouter>
    <Routes>
      <AuthRoute path='/' element={<Main />}></AuthRoute>
      <Route path='/login' element={<Login />} />
      <Route path='/*' element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);

const AuthRoute = ({ path, element, children }) => {
  const { user, userStatus } = useContext(UserContext);

  if (userStatusBusy(userStatus)) return null;

  return user ? (
    <Route path={path} element={element}>
      {children}
    </Route>
  ) : (
    <Navigate to={'/login'} />
  );
};

const userStatusBusy = (userStatus) => {
  return userStatus !== DONE && userStatus !== ERROR;
};

export default Router;
