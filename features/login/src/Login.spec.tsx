import React from 'react';
import { render, screen, within } from '@testing-library/react';

import Login from './Login';
import { User } from '../../interfaces/user';
import { AuthContext } from './state/authProvider';
import { Auth } from './hooks/useAuth';
import { Status } from './hooks/useAxios';

const mockedNavigator = jest.fn();

jest.mock('react-router-dom', () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedNavigator
}));

const renderWithAuthProvider = (element: JSX.Element, user: User | null) => {
  const auth: Auth = {
    signin: jest.fn(),
    signout: jest.fn(),
    user,
    userStatus: Status.LOADING,
    getUser: jest.fn()
  };
  return render(
    <AuthContext.Provider value={auth}>{element}</AuthContext.Provider>
  );
};

describe('when the user is null', () => {
  let container: HTMLElement;
  beforeEach(async () => {
    renderWithAuthProvider(<Login />, null);
    container = await screen.findByTestId('login-container');
  });

  it('should NOT call useNavigate once with "/"', () => {
    expect(mockedNavigator).not.toHaveBeenCalledWith('/');
    expect(mockedNavigator).toHaveBeenCalledTimes(0);
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
      expect(within(loginButton).getByRole('progressbar')).toBeInTheDocument();
    });
  });
});

describe('when the user is populated', () => {
  const user: User = {
    email: 'some@email.com',
    id: 'aUserId',
    role: 'admin'
  };
  beforeEach(() => {
    renderWithAuthProvider(<Login />, user);
  });

  it('should call useNavigate once with "/"', () => {
    expect(mockedNavigator).toHaveBeenCalledWith('/');
    expect(mockedNavigator).toHaveBeenCalledTimes(1);
  });
});
