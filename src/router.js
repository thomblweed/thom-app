import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './views/main';
import Login from './views/login';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
