import axios, { AxiosResponse, Method } from 'axios';

import { config, Environment } from '../config';

const env: Environment = (process.env.NODE_ENV as Environment) ?? 'development';
const baseURL: string = config[env].api.auth.baseUrl;

export const axiosService = async <Body, Response>(
  relativeUrl: string,
  type?: Method,
  data?: Body
): Promise<AxiosResponse<Response>> => {
  return await axios({
    method: type || 'GET',
    url: new URL(relativeUrl, baseURL).toString(),
    withCredentials: true,
    ...(data && { data })
  });
};
