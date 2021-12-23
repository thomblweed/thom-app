type Config = {
  [key in 'development' | 'test' | 'production']: {
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

export { config, Config };
