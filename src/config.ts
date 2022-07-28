type Environment = 'development' | 'test' | 'production';

type Config = {
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

const config: Config = {
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
        baseUrl: '',
        login: '/login',
        logout: '/logout',
        getUser: ''
      }
    }
  }
};

export type { Config, Environment };
export { config };
