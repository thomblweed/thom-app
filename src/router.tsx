import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Main, Login, Blog } from './views';

const PageNotFound = () => (
  <div>
    <p>Page not found</p>
  </div>
);

const Router = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />}>
        <Route path='blog' element={<Blog />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/*' element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
