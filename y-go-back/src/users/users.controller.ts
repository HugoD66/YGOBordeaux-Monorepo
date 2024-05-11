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
  UsePipes,
  HttpCode,
  HttpStatus,
  Req,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  Patch,
  UploadedFiles,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UserResponseDto } from './dto/user-response.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Public } from './auth/public.decorator';
import { LoginDto } from './dto/login.dto';
import { LoginResponseDto } from './dto/login-response.dto';
import { AuthGuard } from './auth/auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileSizeValidationPipe } from '../pipe/FileSizeValidationPipe';
import { multerConfig } from '../multer.config';
import { ChangePasswordDto } from './dto/change-password.dto';

@Controller(`users`)
@ApiTags(`Users`)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: `Register a new user` })
  @ApiBody({ type: CreateUserDto })
  @HttpCode(HttpStatus.CREATED)
  @Post(`/auth/register`)
  async register(
    @Body() createUserDto: CreateUserDto,
  ): Promise<UserResponseDto> {
    try {
      const user: UserResponseDto =
        await this.usersService.create(createUserDto);
      console.log(user);
      return user;
    } catch (error) {
      throw error;
    }
  }

  @Get('/auth/me')
  @UseGuards(AuthGuard)
  async getMe(@Req() req): Promise<UserResponseDto> {
    return this.usersService.findOne(req.user.id);
  }

  @Post(`upload-file/:userId`)
  @UseInterceptors(FileInterceptor(`file`, multerConfig))
  async uploadFile(
    @Param(`userId`) userId: string,
    @UploadedFile(new FileSizeValidationPipe()) file: Express.Multer.File,
  ) {
    await this.usersService.update(userId, { picture: file.path });
    return { message: `File uploaded successfully`, filePath: file.path };
  }

  @Public()
  @UsePipes(new ValidationPipe())
  @Patch(`/change-password`)
  async changePassword(
    @Body() changePasswordDto: ChangePasswordDto,
  ): Promise<any> {
    return this.usersService.changePassword(changePasswordDto);
  }

  @Public()
  @Post(`/auth/login`)
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: `Login user` })
  @ApiBody({ type: LoginDto })
  async login(@Body() loginDto: LoginDto): Promise<LoginResponseDto> {
    try {
      const user = await this.usersService.login(loginDto);
      console.log(user);
      return user;
    } catch (error) {
      throw error;
    }
  }

  @Post(`/auth/logout`)
  @UseGuards(AuthGuard)
  async logout(): Promise<void> {
    return;
  }

  @Get(`me`)
  async getProfile(@Req() req): Promise<UserResponseDto> {
    try {
      const user: UserResponseDto = await this.usersService.findOne(
        req.user.sub,
      );
      return user;
    } catch (error) {
      throw error;
    }
  }

  @Public()
  @Get(`:id`)
  async findOne(@Param(`id`) id: string): Promise<User> {
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new NotFoundException(`User does not exist!`);
    } else {
      return user;
    }
  }

  @Public()
  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @UseGuards(AuthGuard)
  @Patch(`:id`)
  async update(@Param(`id`) id: string, @Body() user: User): Promise<any> {
    return this.usersService.update(id, user);
  }

  @Delete(`:id`)
  async remove(@Param(`id`) id: string): Promise<any> {
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new NotFoundException(`User does not exist!`);
    }
    return this.usersService.remove(id);
  }
}
