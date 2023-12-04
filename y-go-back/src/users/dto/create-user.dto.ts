import {IsString, IsNotEmpty, MinLength, IsEmail, IsStrongPassword} from "class-validator"
import {ApiProperty} from "@nestjs/swagger";
import {UserRoleEnum} from "../entities/types/user.roles.enum";

export class CreateUserDto {
  @MinLength(2)
  @IsNotEmpty()
  @ApiProperty({ example: 'Jean Moulin', description: 'Name' })
  name: string

  @IsEmail()
  @ApiProperty({
    example: 'exemple.email@example.com',
    description: 'Email address',
  })
  @IsNotEmpty({ message: "L'Email ne peut pas être vide" })
  public email!: string;

  @MinLength(3)
  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
  @IsNotEmpty({ message: "Le mot de passe ne peut pas être vide" })
  public password!: string;

  @ApiProperty({
    enum: UserRoleEnum,
    enumName: 'UserRoleEnum',
    example: 'Utilisateur',
    description: 'User role',
  })
  public role: UserRoleEnum;



  /*

  !!!!!!!!!!!!!!!!!!!!!!!!
   @IsString()
    @MinLength(4)
    @MaxLength(20)
    @Match('password')
    passwordConfirm: string;
  !!!!!!!!!!!!!!!!!!!!!!!!




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
