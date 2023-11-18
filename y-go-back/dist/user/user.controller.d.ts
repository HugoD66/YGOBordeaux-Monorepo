import { UserService } from "./user.service";
import { User } from "./entities/user.entity";
export declare class UserController {
    private readonly usersService;
    constructor(usersService: UserService);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    create(user: User): Promise<User>;
    update(id: number, user: User): Promise<any>;
    remove(id: number): Promise<any>;
}
