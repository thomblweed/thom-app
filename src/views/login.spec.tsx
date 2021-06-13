import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';

import Login from './login';

jest.mock('react-router-dom');

describe('Login', () => {
  describe('when the user id is empty', () => {
    const { getByTestId } = render(<Login />);
    const container: HTMLElement = getByTestId('login-container');

    it('should render the Container div', () => {
      expect(container).toBeTruthy();
    });

    it('should render the login form with the container', () => {
      const form: HTMLElement = within(container).getByTestId('login-form');
      expect(form).toBeTruthy();
    });

    describe('<form />', () => {
      const form: HTMLElement = within(container).getByTestId('login-form');

      it('should render the login form within the conatiner div', () => {
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
        const emailFormControl: HTMLElement =
          within(form).getAllByRole('group')[1];
        const emailLabel = within(emailFormControl).getByTestId(
          'password-label-testId'
        );
        expect(emailLabel.textContent).toBe('Password');
      });

      it('should render the password input within the second group div', () => {
        const emailFormControl: HTMLElement =
          within(form).getAllByRole('group')[1];
        const emailInput =
          within(emailFormControl).getByTestId('password-testId');
        expect(emailInput).toBeTruthy();
      });
    });
  });
});
