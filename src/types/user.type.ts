import { Role } from './role.type';

interface User {
  id: string;
  email: string;
  role: Role;
}

export { User };
