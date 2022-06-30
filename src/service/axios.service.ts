import axios, { AxiosResponse, Method } from 'axios';

import { config, Environment } from '~/config';

const env: Environment = (process.env.NODE_ENV as Environment) ?? 'development';
const baseURL: string = config[env].api.auth.baseUrl;

const instance = axios.create({
  baseURL,
  timeout: 4000
});

export const axiosService = async <Body, Response>(
  url: string,
  method?: Method,
  data?: Body
): Promise<AxiosResponse<Response>> =>
  await instance.request({
    url,
    method: method || 'GET',
    withCredentials: true,
    ...(data && { data })
  });
