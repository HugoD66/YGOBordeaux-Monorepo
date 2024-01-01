import {Injectable, NotFoundException, UnauthorizedException} from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import * as bcrypt from 'bcrypt';
import { User } from "./entities/user.entity"
import {CreateUserDto} from "./dto/create-user.dto";
import {UserResponseDto} from "./dto/user-response.dto";
import {JwtService} from "@nestjs/jwt";
import {UserRoleEnum} from "./entities/types/user.roles.enum";
import {LoginDto} from "./dto/login.dto";
import {LoginResponseDto} from "./dto/login-response.dto";
import {
  EmailAlreadyExistsException,
  InvalidEmailFormatException, InvalidPasswordFormatException,
  NameTooShortException,
  ServerErrorException
} from "./errorsRegister/errors";
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserResponseDto> {
    try {
      const existingUser: User = await this.usersRepository.findOne({
        where: { email: createUserDto.email },
      });
      if (existingUser) {
        throw new EmailAlreadyExistsException();
      }
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(createUserDto.password, salt);

      const user: User = this.usersRepository.create({
        name: createUserDto.name,
        email: createUserDto.email,
        password: hashedPassword,
        picture: createUserDto.picture?? null,
        role: createUserDto.role ?? UserRoleEnum.Utilisateur,
      });
      const savedUser: User = await this.usersRepository.save(user);
      return {
        id: savedUser.id,
        name: savedUser.name,
        email: savedUser.email,
        picture: savedUser.picture,
        role: savedUser.role
      };
    } catch (error) {
      if ( error instanceof EmailAlreadyExistsException ||
        error instanceof InvalidEmailFormatException ||
        error instanceof NameTooShortException ||
        error instanceof ServerErrorException ||
        error instanceof InvalidPasswordFormatException) {
        throw error;
      }
      throw new ServerErrorException();
    }
  }
  async login(loginDto: LoginDto): Promise<LoginResponseDto> {
    try {
      const user: User = await this.usersRepository.findOne({
        where: { email: loginDto.email },
      });
      if (!user) {
        throw new NotFoundException('User not found');
      }
      const passwordMatch = await bcrypt.compare(
        loginDto.password,
        user.password,
      );
      if (!passwordMatch) {
        throw new UnauthorizedException('Invalid password');
      }
      const payload = { sub: user.id, email: user.email };
      return {
        ...user,
        access_token: await this.jwtService.signAsync(payload),
      };
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: string): Promise<User> {
    console.log('REQ USER ID : ')

    return this.usersRepository.findOne({ where: { id } })
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find()
  }
  /*
  async update(id: string, user: Partial<User>): Promise<User> {
    await this.usersRepository.update(id, user)
    return this.usersRepository.findOne({ where: { id } })
  }
  */
  async update(id: string, updateUserDto: Partial<User>): Promise<UserResponseDto> {
    const user: User = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    const updatedUser = {
      ...user,
      ...updateUserDto
    };
    await this.usersRepository.save(updatedUser);
    return {
      id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
      picture: updatedUser.picture,
      role: updatedUser.role,
    };
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id)
  }
}
