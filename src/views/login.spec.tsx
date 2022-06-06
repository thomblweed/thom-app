import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  act,
  render,
  screen,
  waitForElementToBeRemoved,
  within
} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import * as UserService from '../service/user.service';
import Login from './login';

const spySigninUser = jest.spyOn(UserService, 'singinUser');

const mockedNavigator = jest.fn();
jest.mock('react-router-dom', () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedNavigator
}));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false
    }
  }
});
const renderWithQueryClientProvider = (element: JSX.Element) =>
  render(
    <QueryClientProvider client={queryClient}>{element}</QueryClientProvider>
  );

describe('when the Login component is rendered', () => {
  let container: HTMLElement;
  beforeEach(async () => {
    renderWithQueryClientProvider(<Login />);
    container = await screen.findByTestId('login-container');
  });

  it('should render the Container div', () => {
    expect(container).toBeInTheDocument();
  });

  it('should render the login form within the container', () => {
    const form: HTMLElement = within(container).getByTestId('login-form');
    expect(form).toBeInTheDocument();
  });

  describe('<form />', () => {
    let form: HTMLElement;
    beforeEach(() => {
      form = within(container).getByTestId('login-form');
    });

    it('should render the login form within the container div', () => {
      expect(form).toBeInTheDocument();
    });

    it('should render the correct amount of group div elements within the login form', () => {
      const groupDivs: HTMLElement[] = within(form).getAllByRole('group');
      expect(groupDivs).toHaveLength(2);
    });

    it('should render the email address label within the first group div', () => {
      const emailFormControl: HTMLElement =
        within(form).getAllByRole('group')[0];
      const emailLabel = within(emailFormControl).getByText('Email Address');
      expect(emailLabel).toBeInTheDocument();
    });

    it('should render the email address input within the first group div', () => {
      const emailFormControl: HTMLElement =
        within(form).getAllByRole('group')[0];
      const emailInput = within(emailFormControl).getByRole('textbox', {
        name: 'Email Address'
      });
      expect(emailInput).toBeInTheDocument();
    });

    it('should render the password label within the second group div', () => {
      const passwordFormControl: HTMLElement =
        within(form).getAllByRole('group')[1];
      const passwordLabel = within(passwordFormControl).getByText('Password');
      expect(passwordLabel).toBeInTheDocument();
    });

    it('should render the password input within the second group div', () => {
      const passwordFormControl: HTMLElement =
        within(form).getAllByRole('group')[1];
      const passwordInput =
        within(passwordFormControl).getByLabelText('Password');
      expect(passwordInput).toBeInTheDocument();
    });

    it('should render the login button input within the form', () => {
      const loginButton = within(form).getByRole('button');
      expect(loginButton).toBeInTheDocument();
    });
  });
});

describe('When User signs in successfully', () => {
  beforeEach(async () => {
    spySigninUser.mockResolvedValue({
      email: 'some@email.com',
      id: 'aUserId',
      role: 'admin'
    });
    renderWithQueryClientProvider(<Login />);
    await userEvent.type(
      screen.getByRole('textbox', {
        name: 'Email Address'
      }),
      'test@testing.com'
    );
    await userEvent.type(screen.getByLabelText('Password'), 'cheese');
    await userEvent.click(screen.getByRole('button'));
  });
  afterEach(jest.clearAllMocks);

  it('should call useNavigate once with "/"', async () => {
    expect(mockedNavigator).toHaveBeenCalledWith('/');
    expect(mockedNavigator).toHaveBeenCalledTimes(1);
  });
});
