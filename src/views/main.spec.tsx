import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  render,
  screen,
  waitForElementToBeRemoved,
  within
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import * as UserService from '../service/user.service';
import Main from './main';

const spyGetCurrentUser = jest.spyOn(UserService, 'getCurrentUser');
const spySignoutUser = jest.spyOn(UserService, 'signoutUser');

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
    <QueryClientProvider client={queryClient}>{element}</QueryClientProvider>,
    { wrapper: BrowserRouter }
  );

describe('when user is not logged in', () => {
  let mainViewContainer: HTMLElement;

  beforeEach(async () => {
    spyGetCurrentUser.mockRejectedValue({ statusCode: 401 });
    renderWithQueryClientProvider(<Main />);
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

describe('When user is logged in', () => {
  let mainViewContainer: HTMLElement;

  beforeEach(async () => {
    spyGetCurrentUser.mockResolvedValue({
      email: 'some@email.com',
      id: 'aUserId',
      role: 'admin'
    });
    renderWithQueryClientProvider(<Main />);
    await waitForElementToBeRemoved(() => screen.queryByRole('progressbar'));
    mainViewContainer = screen.getByTestId('main-view');
  });

  it('should render the main view container', () => {
    expect(mainViewContainer).toBeInTheDocument();
  });

  it('should render the title within the view container', () => {
    const title = within(mainViewContainer).getByText('thom app');
    expect(title).toBeInTheDocument();
  });

  it('should render the welcome text for a guest user within the view container', () => {
    const welcomeText = within(mainViewContainer).getByText(
      'Welcome some@email.com'
    );
    expect(welcomeText).toBeInTheDocument();
  });

  it('should NOT render a link to Sign In within the view container', () => {
    const signInLink = within(mainViewContainer).queryByText('Sign In');
    expect(signInLink).not.toBeInTheDocument();
  });

  it('should render a link to Logout within the view container', () => {
    const signOutLink = within(mainViewContainer).getByText('Logout');
    expect(signOutLink).toBeInTheDocument();
  });
});

describe('When user clicks the logs out button', () => {
  let mainViewContainer: HTMLElement;
  beforeEach(async () => {
    spySignoutUser.mockResolvedValue(null);
    renderWithQueryClientProvider(<Main />);
    await waitForElementToBeRemoved(() => screen.queryByRole('progressbar'));
    mainViewContainer = screen.getByTestId('main-view');
    await userEvent.click(screen.getByText('Logout'));
  });

  it('should render the welcome text for a guest user within the view container', () => {
    const welcomeText = within(mainViewContainer).getByText('Welcome Guest');
    expect(welcomeText).toBeInTheDocument();
  });

  it('should render a link to Sign In within the view container', () => {
    const signInLink = within(mainViewContainer).queryByText('Sign In');
    expect(signInLink).toBeInTheDocument();
  });

  it('should NOT render a link to Logout within the view container', () => {
    const signOutLink = within(mainViewContainer).queryByText('Logout');
    expect(signOutLink).not.toBeInTheDocument();
  });
});
