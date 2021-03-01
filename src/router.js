import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { AuthContext } from './state/user-provider';
import Main from './views/main';
import Login from './views/login';

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
  const authContext = useContext(AuthContext);
  console.log('auth route :>> ', authContext);
  return authContext.user ? (
    <Route path={path} element={element}>
      {children}
    </Route>
  ) : (
    <Navigate to={'/login'} />
  );
};

export default Router;
