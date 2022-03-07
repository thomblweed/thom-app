import { Status } from '../enums/status.enum';
import { Credentials } from './Credentials.interface';
import { User } from './User.interface';
export interface Auth {
    user: User | null;
    userStatus: Status;
    signin: (data: Credentials) => void;
    signout: () => void;
    getUser: () => void;
}
