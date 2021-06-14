import React from 'react';
import axios, { AxiosResponse } from 'axios';
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './app';
import { emptyUser, User } from './interfaces/user';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Acceptance Tests', () => {
  let login: HTMLElement | null;

  it('should load the login page when user is not authorised', async () => {
    render(<App />);
    login = await screen.findByTestId('login-container');
    expect(login).toBeTruthy();
  });

  describe('View and use Login form', () => {
    beforeEach(async () => {
      mockedAxios.mockResolvedValue(axiosResponse<User>(emptyUser, 404));
      render(<App />);
      login = await screen.findByTestId('login-container');
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
  });

  describe('Can login to main view page', () => {
    beforeEach(async () => {
      mockedAxios.mockResolvedValue(axiosResponse<User>(emptyUser, 404));
      render(<App />);
      await waitForElementToBeRemoved(screen.queryByText('Loading...'));
      mockedAxios.mockResolvedValue(
        axiosResponse<User>({ id: 'userid', email: 'thom@test.com' }, 200)
      );
    });

    it('should be able to login to main view page', async () => {
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
      userEvent.click(loginButton);

      await waitFor(() =>
        expect(screen.queryByText('Loading...')).toBeTruthy()
      );
      await waitFor(() =>
        expect(screen.queryByTestId('main-container')).toBeTruthy()
      );
      const welcomeText: HTMLParagraphElement | null = screen.queryByTestId(
        'welcome-email'
      ) as HTMLParagraphElement;
      expect(welcomeText.textContent).toBe('Welcome thom@test.com');
    });
  });
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
