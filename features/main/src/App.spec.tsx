import React from 'react';
import '@testing-library/jest-dom';
import axios, { AxiosResponse } from 'axios';
import {
  render,
  screen,
  waitForElementToBeRemoved,
  within
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { App } from './App';
import { User } from '../../login/src/interfaces/user';

jest.mock('axios', () => jest.fn());
const mockedAxios = axios as unknown as jest.Mock;

describe('when user is not logged in', () => {
  let mainViewContainer: HTMLElement;

  beforeEach(async () => {
    mockedAxios.mockResolvedValueOnce(axiosResponse<User | null>(null, 404));
    render(<App />);
    await waitForElementToBeRemoved(() => screen.queryByRole('progressbar'));
    mainViewContainer = screen.getByTestId('main-view');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the main view container', () => {
    expect(mainViewContainer).toBeInTheDocument();
  });

  it('should render the title within the view container', () => {
    const title = within(mainViewContainer).getByText('thom app');
    expect(title).toBeInTheDocument();
  });

  it('should render the welcome text for a guest user within the view container', () => {
    const welcomeText = within(mainViewContainer).getByText('Welcome Guest');
    expect(welcomeText).toBeInTheDocument();
  });

  it('should render a link to Sign In within the view container', () => {
    const signInLink = within(mainViewContainer).getByText('Sign In');
    expect(signInLink).toBeInTheDocument();
  });
});

describe('when the user navigates to the login view', () => {
  let loginViewContainer: HTMLElement;

  beforeEach(async () => {
    mockedAxios.mockResolvedValueOnce(axiosResponse<User>(null, 404));
    render(<App />);
    await waitForElementToBeRemoved(() => screen.queryByRole('progressbar'));

    navigateToLoginView();
    loginViewContainer = await screen.findByTestId('login-container');
  });

  afterEach(() => {
    resetToHomeRoute();
    jest.clearAllMocks();
  });

  it('should render the login view container', () => {
    expect(loginViewContainer).toBeInTheDocument();
  });

  it('should have login elements visable', () => {
    const emailInput = within(loginViewContainer).getByRole('textbox', {
      name: 'Email Address'
    });
    const passwordInput = within(loginViewContainer).getByLabelText('Password');
    const loginButton = within(loginViewContainer).getByText('Login');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it('should be able to enter username and password', () => {
    const { emailInput, passwordInput } = enterCredentials();
    expect(emailInput.value).toBe('thom@test.com');
    expect(passwordInput.value).toBe('password');
  });
});

describe('Can login to main view page', () => {
  beforeEach(async () => {
    mockedAxios.mockResolvedValueOnce(axiosResponse<User>(null, 404));
    render(<App />);
    await waitForElementToBeRemoved(() => screen.queryByRole('progressbar'));

    navigateToLoginView();
    await screen.findByTestId('login-container');
    mockedAxios.mockResolvedValueOnce(
      axiosResponse<User>(
        { email: 'thom@test.com', id: 'id value', role: 'admin' },
        404
      )
    );
  });

  afterEach(() => {
    resetToHomeRoute();
    jest.clearAllMocks();
  });

  it('should be able to login to main view page', async () => {
    login();

    const mainViewContainer = await screen.findByTestId('main-view');
    expect(mainViewContainer).toBeInTheDocument();

    const welcomeText: HTMLParagraphElement = screen.getByText(
      'Welcome thom@test.com'
    ) as HTMLParagraphElement;
    const logoutButton: HTMLButtonElement = screen.getByText(
      'Logout'
    ) as HTMLButtonElement;
    expect(welcomeText).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();
  });
});

const navigateToLoginView = (): void => {
  const loginLink = screen.getByText('Sign In');
  expect(loginLink).toBeInTheDocument();
  userEvent.click(loginLink);
};

const login = (): void => {
  enterCredentials();
  const loginButton = screen.getByText('Login');
  userEvent.click(loginButton);
};

const enterCredentials = (): {
  emailInput: HTMLInputElement;
  passwordInput: HTMLInputElement;
} => {
  const emailInput = screen.getByRole('textbox', {
    name: 'Email Address'
  }) as HTMLInputElement;
  const passwordInput = screen.getByLabelText('Password') as HTMLInputElement;
  userEvent.type(emailInput, 'thom@test.com');
  userEvent.type(passwordInput, 'password');
  return { emailInput, passwordInput };
};

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

const resetToHomeRoute = (): void => {
  window.history.pushState({}, '', '/');
};
