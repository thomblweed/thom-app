import { useMachine } from '@xstate/react';
import { createMachine } from 'xstate';

enum AuthState {
  loggedOut = 'loggedOut',
  loggingIn = 'loggingIn',
  loggedIn = 'loggedIn',
  loggingOut = 'loggingOut',
  loginError = 'loginError',
  logoutError = 'logoutError'
}

const authMachine = createMachine({
  initial: 'loggedOut',
  states: {
    loggedOut: {
      on: { LOGIN: 'loggingIn' }
    },
    loggingIn: {
      on: { AUTHED: 'loggedIn', LOGIN_ERROR: 'loginError' }
    },
    loggedIn: {
      on: { LOGOUT: 'loggingOut' }
    },
    loggingOut: {
      on: { UNAUTHED: 'loggedOut', LOGOUT_ERROR: 'logoutError' }
    },
    loginError: {
      on: { LOGIN: 'loggingIn' }
    },
    logoutError: {
      on: { LOGOUT: 'loggingOut' }
    }
  }
});

export { authMachine };
