import React from 'react';
import { render, within } from '@testing-library/react';

import Login from './login';
import { emptyUser, User } from '../interfaces/user';
import { AuthContext } from '../state/authProvider';
import { Auth } from '../hooks/useAuth';
import { Status } from '../hooks/useAxios';

const mockedNavigator = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedNavigator
}));

const renderWithAuthProvider = (element: JSX.Element, user: User) => {
  const auth: Auth = {
    login: jest.fn(),
    logout: jest.fn(),
    user,
    userStatus: Status.INITIAL
  };
  return render(
    <AuthContext.Provider value={auth}>{element}</AuthContext.Provider>
  );
};

describe('<Login />', () => {
  describe('when the user id is empty', () => {
    const { getByTestId } = renderWithAuthProvider(<Login />, emptyUser);
    const container: HTMLElement = getByTestId('login-container');

    it('should render the Container div', () => {
      expect(container).toBeTruthy();
    });

    it('should render the login form within the container', () => {
      const form: HTMLElement = within(container).getByTestId('login-form');
      expect(form).toBeTruthy();
    });

    describe('<form />', () => {
      const form: HTMLElement = within(container).getByTestId('login-form');

      it('should render the login form within the container div', () => {
        expect(form).toBeTruthy();
      });

      it('should render the group divs within the login form', () => {
        const groupDivs: HTMLElement[] = within(form).getAllByRole('group');
        expect(groupDivs).toHaveLength(3);
      });

      it('should render the correct amount of group div elements within the login form', () => {
        const groupDivs: HTMLElement[] = within(form).getAllByRole('group');
        expect(groupDivs).toHaveLength(3);
      });

      it('should render the email address label within the first group div', () => {
        const emailFormControl: HTMLElement =
          within(form).getAllByRole('group')[0];
        const emailLabel =
          within(emailFormControl).getByTestId('email-label-testId');
        expect(emailLabel.textContent).toBe('Email Address');
      });

      it('should render the email address input within the first group div', () => {
        const emailFormControl: HTMLElement =
          within(form).getAllByRole('group')[0];
        const emailInput = within(emailFormControl).getByTestId('email-testId');
        expect(emailInput).toBeTruthy();
      });

      it('should render the password label within the second group div', () => {
        const passwordFormControl: HTMLElement =
          within(form).getAllByRole('group')[1];
        const emailLabel = within(passwordFormControl).getByTestId(
          'password-label-testId'
        );
        expect(emailLabel.textContent).toBe('Password');
      });

      it('should render the password input within the second group div', () => {
        const passwordFormControl: HTMLElement =
          within(form).getAllByRole('group')[1];
        const emailInput =
          within(passwordFormControl).getByTestId('password-testId');
        expect(emailInput).toBeTruthy();
      });

      it('should render the login button input within the third group div', () => {
        const loginGroup: HTMLElement = within(form).getAllByRole('group')[2];
        const loginButton = within(loginGroup).getByTestId('login-button');
        expect(loginButton).toBeTruthy();
        expect(loginButton.textContent).toBe('Login');
      });
    });
  });

  describe('when the user id is populated', () => {
    const user: User = {
      email: 'some@email.com',
      id: 'aUserId'
    };
    const { queryByTestId } = renderWithAuthProvider(<Login />, user);

    it('should call useNavigate once with "/"', () => {
      expect(mockedNavigator).toHaveBeenCalledWith('/');
      expect(mockedNavigator).toHaveBeenCalledTimes(1);
    });

    it('should NOT render the Container', () => {
      const container: HTMLElement | null = queryByTestId('login-container');
      expect(container).toBeFalsy();
    });

    it('should NOT render the login form', () => {
      const form: HTMLElement | null = queryByTestId('login-form');
      expect(form).toBeFalsy();
    });
  });
});
