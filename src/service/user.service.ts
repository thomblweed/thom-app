import { axiosService } from './axios.service';
import type { Credentials, User } from '~/types';
import { config, Environment } from '~/config';

const env = (process.env.NODE_ENV as Environment) ?? 'development';
const authUrl = config[env].api.auth;

export const getCurrentUser = async () =>
  (await axiosService<null, User | null>(authUrl.getUser)).data;

export const signoutUser = async () =>
  (await axiosService<null, null>(authUrl.logout, 'POST')).data;

export const signinUser = async (credentials: Credentials) =>
  (await axiosService<Credentials, User>(authUrl.login, 'POST', credentials))
    .data;
