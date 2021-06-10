import React from 'react';
import { render } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';

import Login from './login';

jest.mock('react-router-dom');

describe('Login', () => {
  describe('when the user id is empty', () => {
    it('should load the page correctly', () => {
      const { debug } = render(<Login />);
      debug();
    });
  });
});
