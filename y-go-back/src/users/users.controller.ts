import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  NotFoundException,
  ValidationPipe,
  UsePipes, HttpCode, HttpStatus
} from "@nestjs/common"
import { UsersService } from "./users.service"
import { User } from "./entities/user.entity"
import {CreateUserDto} from "./dto/create-user.dto";
import {UserResponseDto} from "./dto/user-response.dto";
import {ApiBody, ApiOperation, ApiTags} from "@nestjs/swagger";
import { Public } from './auth/public.decorator';
import {LoginDto} from "./dto/login.dto";
import {LoginResponseDto} from "./dto/login-response.dto";

@Controller(`users`)
@ApiTags(`Users`)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Register a new user' })
  @ApiBody({ type: CreateUserDto })
  @HttpCode(HttpStatus.CREATED)
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
  @Public()
  @Post('/auth/login-register')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Login user' })
  @ApiBody({ type: LoginDto })
  async login(@Body() loginDto: LoginDto): Promise<LoginResponseDto> {
    try {
      const user = await this.usersService.login(loginDto);
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
  async findOne(@Param(`id`) id: string): Promise<User> {
    const user = await this.usersService.findOne(id)
    if (!user) {
      throw new NotFoundException(`User does not exist!`)
    } else {
      return user
    }
  }

  @Put(`:id`)
  async update(@Param(`id`) id: string, @Body() user: User): Promise<any> {
    return this.usersService.update(id, user)
  }

  @Delete(`:id`)
  async remove(@Param(`id`) id: string): Promise<any> {
    // handle error if users does not exist
    const user = await this.usersService.findOne(id)
    if (!user) {
      throw new NotFoundException(`User does not exist!`)
    }
    return this.usersService.remove(id)
  }
}
