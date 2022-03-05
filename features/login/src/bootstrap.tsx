import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'thom-components';

import { Login } from './Login';
import { AuthProvider } from './state/AuthProvider';

render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('thom-app')
);
