import React, { FC, useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Loading } from 'thom-components';

import { AuthContext } from './state/authProvider';
import Main from './views/main';
import Login from './views/login';
import { Status } from './hooks/useAxios';

const PageNotFound = () => (
  <div>
    <p>Page not found</p>
  </div>
);

const Router = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route index element={<AuthRoute />} />
      <Route path='/login' element={<Login />} />
      <Route path='/*' element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);

const AuthRoute: FC = () => {
  const { user, userStatus } = useContext(AuthContext);
  if (userStatusBusy(userStatus)) return <Loading />;

  return user.id ? <Main /> : <Navigate to={'/login'} />;
};

const userStatusBusy = (userStatus: Status): boolean => {
  return userStatus !== Status.DONE && userStatus !== Status.ERROR;
};

export default Router;
