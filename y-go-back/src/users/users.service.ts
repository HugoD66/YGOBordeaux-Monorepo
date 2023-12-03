import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { User } from "./entities/user.entity"
import {CreateUserDto} from "./dto/create-user.dto";
import {UserResponseDto} from "./dto/user-response.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find()
  }

  async findOne(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } })
  }

  async create(createUserDto: CreateUserDto): Promise<UserResponseDto> {
    try {
      const user: UserResponseDto = this.userRepository.create(createUserDto);
      return user;
    } catch(error) {
      throw error;
    }
  }

  async update(id: number, user: Partial<User>): Promise<User> {
    await this.userRepository.update(id, user)
    return this.userRepository.findOne({ where: { id } })
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id)
  }
}
