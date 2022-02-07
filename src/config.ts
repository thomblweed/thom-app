type Environment = 'development' | 'test' | 'production';

type Config = {
  [key in Environment]: {
    api: {
      baseUrl: string;
    };
  };
};

const config: Config = {
  development: {
    api: {
      baseUrl: 'http://localhost:3001'
    }
  },
  test: {
    api: {
      baseUrl: 'http://testurl'
    }
  },
  production: {
    api: {
      baseUrl: 'http://testurl'
    }
  }
};

export type { Config, Environment };
export { config };
