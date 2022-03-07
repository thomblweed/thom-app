import { Role } from '../types/Role.type';
export interface User {
    id: string;
    email: string;
    role: Role;
}
