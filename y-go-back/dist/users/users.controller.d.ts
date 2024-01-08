/// <reference types="multer" />
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UserResponseDto } from './dto/user-response.dto';
import { LoginDto } from './dto/login.dto';
import { LoginResponseDto } from './dto/login-response.dto';
export declare class UsersController {
  private readonly usersService;
  constructor(usersService: UsersService);
  register(createUserDto: CreateUserDto): Promise<UserResponseDto>;
  uploadFile(
    userId: string,
    file: Express.Multer.File,
  ): Promise<{
    message: string;
    filePath: string;
  }>;
  login(loginDto: LoginDto): Promise<LoginResponseDto>;
  logout(req: any): Promise<void>;
  getProfile(req: any): Promise<UserResponseDto>;
  findOne(id: string): Promise<User>;
  findAll(): Promise<User[]>;
  update(id: string, user: User): Promise<any>;
  remove(id: string): Promise<any>;
}
