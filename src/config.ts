export type Environment = 'development' | 'integration' | 'test' | 'production';

export type Config = {
  [key in Environment]: {
    api: {
      auth: {
        baseUrl: string;
        login: string;
        logout: string;
        getUser: string;
      };
    };
  };
};

export const config: Config = {
  development: {
    api: {
      auth: {
        baseUrl: 'http://localhost:3001/api/users',
        login: '/signin',
        logout: '/signout',
        getUser: '/currentuser'
      }
    }
  },
  integration: {
    api: {
      auth: {
        baseUrl: 'http://integration',
        login: '/login',
        logout: '/logout',
        getUser: '/currentuser'
      }
    }
  },
  test: {
    api: {
      auth: {
        baseUrl: 'http://testurl',
        login: '/login',
        logout: '/logout',
        getUser: '/currentuser'
      }
    }
  },
  production: {
    api: {
      auth: {
        baseUrl: 'http://localhost',
        login: '/login',
        logout: '/logout',
        getUser: '/currentuser'
      }
    }
  }
};

