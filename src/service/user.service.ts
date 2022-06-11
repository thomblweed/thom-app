import { axiosService } from './axios.service';
import { User } from '../types/user.type';
import { Credentials } from '../types/credentials.type';

export const getCurrentUser = async () =>
  (await axiosService<undefined, User>('/api/users/currentuser')).data;

export const signoutUser = async () =>
  (await axiosService<undefined, null>('/api/users/signout', 'POST')).data;

export const signinUser = async (credentials: Credentials) =>
  (
    await axiosService<Credentials, User>(
      '/api/users/signin',
      'POST',
      credentials
    )
  ).data;
