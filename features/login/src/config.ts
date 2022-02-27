type Environment = 'development' | 'test' | 'production';

type Config = {
  [key in Environment]: {
    api: {
      auth: {
        baseUrl: string;
      };
    };
  };
};

const config: Config = {
  development: {
    api: {
      auth: {
        baseUrl: 'http://localhost:3001'
      }
    }
  },
  test: {
    api: {
      auth: {
        baseUrl: 'http://testurl'
      }
    }
  },
  production: {
    api: {
      auth: {
        baseUrl: 'http://testurl'
      }
    }
  }
};

export type { Config, Environment };
export { config };
