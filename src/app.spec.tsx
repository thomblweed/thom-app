import React from 'react';
import axios, { AxiosResponse } from 'axios';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './app';
import { emptyUser, User } from './interfaces/user';

jest.mock('axios', () => jest.fn());
const mockedAxios = axios as unknown as jest.Mock; //axios as jest.Mocked<typeof axios>;

describe('Acceptance Tests', () => {
  let loginContainer: HTMLElement | null;

  afterEach(() => {
    cleanup();
  });

  it('should load the login page when user is not authorised', async () => {
    render(<App />);
    loginContainer = await screen.findByTestId('login-container');
    expect(loginContainer).toBeTruthy();
  });

  describe('View and use Login form', () => {
    beforeEach(async () => {
      mockedAxios.mockResolvedValue(axiosResponse<User>(emptyUser, 404));
      render(<App />);
      loginContainer = await screen.findByTestId('login-container');
    });

    it('should have login elements visable', () => {
      const emailInput: HTMLInputElement | null = screen.queryByTestId(
        'email-testId'
      ) as HTMLInputElement;
      const passwordInput: HTMLInputElement | null = screen.queryByTestId(
        'password-testId'
      ) as HTMLInputElement;
      const loginButton: HTMLButtonElement | null = screen.queryByTestId(
        'login-button'
      ) as HTMLButtonElement;

      expect(emailInput).toBeTruthy();
      expect(passwordInput).toBeTruthy();
      expect(loginButton).toBeTruthy();
    });

    it('should be able to enter username and password', () => {
      const { emailInput, passwordInput } = enterCredentials();
      expect(emailInput.value).toBe('thom@test.com');
      expect(passwordInput.value).toBe('password');
    });
  });

  describe('Can login to main view page', () => {
    beforeEach(async () => {
      mockedAxios.mockResolvedValue(axiosResponse<User>(emptyUser, 404));
      render(<App />);

      await waitFor(() => {
        expect(screen.getByRole('submit')).toBeTruthy();
      });

      mockedAxios.mockResolvedValue(
        axiosResponse<User>({ id: 'userid', email: 'thom@test.com' }, 200)
      );
    });

    it('should be able to login to main view page', async () => {
      login();
      const loginButton = screen.queryByRole('submit') as HTMLButtonElement;

      await waitFor(() =>
        expect(loginButton.getAttribute('loading')).toBe('1')
      );
      await waitFor(() =>
        expect(screen.queryByTestId('main-container')).toBeTruthy()
      );

      const welcomeText: HTMLParagraphElement | null = screen.queryByTestId(
        'welcome-email'
      ) as HTMLParagraphElement;
      const logoutButton: HTMLButtonElement | null = screen.queryByTestId(
        'logout-button'
      ) as HTMLButtonElement;
      expect(welcomeText.textContent).toBe('Welcome thom@test.com');
      expect(logoutButton.textContent).toBe('Logout');
    });
  });

  const login = () => {
    enterCredentials();
    const loginButton: HTMLButtonElement = screen.getByTestId(
      'login-button'
    ) as HTMLButtonElement;
    userEvent.click(loginButton);
  };

  const enterCredentials = (): {
    emailInput: HTMLInputElement;
    passwordInput: HTMLInputElement;
  } => {
    const emailInput: HTMLInputElement = screen.getByTestId(
      'email-testId'
    ) as HTMLInputElement;
    const passwordInput: HTMLInputElement = screen.getByTestId(
      'password-testId'
    ) as HTMLInputElement;
    userEvent.type(emailInput, 'thom@test.com');
    userEvent.type(passwordInput, 'password');
    return { emailInput, passwordInput };
  };
});

const axiosResponse = <T,>(
  response: T,
  responseCode: number
): AxiosResponse<T> => ({
  data: response,
  status: responseCode,
  statusText: '',
  headers: {},
  config: {}
});
