import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Main, Blog } from './views';
const Login = lazy(() =>
  import('./views/login').then(({ Login }) => ({ default: Login }))
);

const PageNotFound = () => (
  <div>
    <p>Page not found</p>
  </div>
);

export const Router = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />}>
        <Route path='blog' element={<Blog />} />
      </Route>
      <Route
        path='/login'
        element={
          <Suspense>
            <Login />
          </Suspense>
        }
      />
      <Route path='/*' element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);
