import { UserRoleEnum } from '../entities/types/user.roles.enum';
export declare class CreateUserDto {
    name: string;
    email: string;
    password: string;
    role: UserRoleEnum;
    phone: string;
    picture: string;
}
