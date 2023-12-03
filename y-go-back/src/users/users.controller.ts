import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException } from "@nestjs/common"
import { UsersService } from "./users.service"
import { User } from "./entities/user.entity"
import {CreateUserDto} from "./dto/create-user.dto";
import {UserResponseDto} from "./dto/user-response.dto";
@Controller(`users`)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/auth/register')
  async register(
    @Body() createUserDto: CreateUserDto,
  ): Promise<UserResponseDto> {
    try {
      const user: UserResponseDto =
        await this.usersService.create(createUserDto);
      console.log(user)
      return user;
    } catch (error) {
      throw error;
    }
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll()
  }

  @Get(`:id`)
  async findOne(@Param(`id`) id: number): Promise<User> {
    const user = await this.usersService.findOne(id)
    if (!user) {
      throw new NotFoundException(`User does not exist!`)
    } else {
      return user
    }
  }

  @Put(`:id`)
  async update(@Param(`id`) id: number, @Body() user: User): Promise<any> {
    return this.usersService.update(id, user)
  }

  @Delete(`:id`)
  async remove(@Param(`id`) id: number): Promise<any> {
    // handle error if users does not exist
    const user = await this.usersService.findOne(id)
    if (!user) {
      throw new NotFoundException(`User does not exist!`)
    }
    return this.usersService.remove(id)
  }
}
