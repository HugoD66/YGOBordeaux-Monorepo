import { Repository } from "typeorm";
import { User } from "../users/entities/user.entity";
import { UsersService } from "../users/users.service";
export declare class UserFixtures {
    private userRepository;
    private usersService;
    constructor(userRepository: Repository<User>, usersService: UsersService);
    seedUsers(): Promise<void>;
}
