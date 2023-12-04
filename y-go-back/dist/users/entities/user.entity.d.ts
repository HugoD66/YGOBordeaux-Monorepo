import { UserRoleEnum } from './types/user.roles.enum';
export declare class User {
    id: string;
    name: string;
    email: string;
    password: string;
    role: UserRoleEnum;
}
