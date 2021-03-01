import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { AuthContext } from './state/user-provider';
import Main from './views/main';
import Login from './views/login';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />} />
      <AuthRoute path='/' element={<Main />}></AuthRoute>
    </Routes>
  </BrowserRouter>
);

const AuthRoute = ({ path, element, children }) => {
  const auth = useContext(AuthContext);
  return auth.user ? (
    <Route path={path} element={element}>
      {children}
    </Route>
  ) : (
    <Navigate to={'/login'} />
  );
};

export default Router;
