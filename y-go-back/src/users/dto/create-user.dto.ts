import {IsString, IsNotEmpty, MinLength, IsEmail} from "class-validator"
import {ApiProperty} from "@nestjs/swagger";
import {UserRoleEnum} from "../entities/types/user.roles.enum";

export class CreateUserDto {
  @MinLength(3)
  @IsNotEmpty()
  @ApiProperty({ example: 'Jean Moulin', description: 'Name' })
  name: string

  @IsEmail()
  @ApiProperty({
    example: 'exemple.email@example.com',
    description: 'Email address',
  })
  @IsNotEmpty({ message: "Email can't be empty" })
  public email!: string;

  @MinLength(3)
  @IsNotEmpty({ message: "Password can't be empty" })
  public password!: string;

  @ApiProperty({
    enum: UserRoleEnum,
    enumName: 'UserRoleEnum',
    example: 'Utilisateur',
    description: 'User role',
  })
  public role: UserRoleEnum;



  /*
  @IsOptional()
  @IsString()
  username: string


  @IsOptional()
  @IsString()
  address: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsOptional()
  @IsString()
  phone: string
  */

}
