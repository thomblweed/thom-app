interface Config {
  [key: string]: {
    api: {
      baseUrl: string;
    };
  };
}

const config: Config = {
  development: {
    api: {
      baseUrl: 'http://localhost:3001'
    }
  }
};

export { config, Config };
