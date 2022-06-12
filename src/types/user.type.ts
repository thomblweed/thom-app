import { Role } from './role.type';

export type User = {
  id: string;
  email: string;
  role: Role;
};
