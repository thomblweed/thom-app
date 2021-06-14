import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './app';

describe('Acceptance Tests', () => {
  let login: HTMLElement | null;

  it('should load the login page when user is not authorised', () => {
    render(<App />);
    login = screen.queryByTestId('login-container');
    expect(login).toBeTruthy();
  });

  describe('Login and Load Main Page', () => {
    beforeEach(() => {
      render(<App />);
      login = screen.getByTestId('login-container');
    });

    it('should have login elements visable', () => {
      const emailInput = screen.queryByTestId('email-testId');
      const passwordInput = screen.queryByTestId('password-testId');
      const loginButton = screen.queryByTestId('login-button');

      expect(emailInput).toBeTruthy();
      expect(passwordInput).toBeTruthy();
      expect(loginButton).toBeTruthy();
    });

    it('should be able to enter username and password', () => {
      const emailInput: HTMLInputElement = screen.getByTestId(
        'email-testId'
      ) as HTMLInputElement;
      const passwordInput: HTMLInputElement = screen.getByTestId(
        'password-testId'
      ) as HTMLInputElement;

      userEvent.type(emailInput, 'thom@test.com');
      userEvent.type(passwordInput, 'password');

      expect(emailInput.value).toBe('thom@test.com');
      expect(passwordInput.value).toBe('password');
    });

    it('should be able to login to main view page', () => {
      const emailInput: HTMLInputElement = screen.getByTestId(
        'email-testId'
      ) as HTMLInputElement;
      const passwordInput: HTMLInputElement = screen.getByTestId(
        'password-testId'
      ) as HTMLInputElement;
      const loginButton: HTMLButtonElement = screen.getByTestId(
        'login-button'
      ) as HTMLButtonElement;

      userEvent.type(emailInput, 'thom@test.com');
      userEvent.type(passwordInput, 'password');
      //   userEvent.click(loginButton);
    });
  });
});
