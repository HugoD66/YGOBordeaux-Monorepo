import {
  IsString,
  IsNotEmpty,
  MinLength,
  IsEmail,
  IsStrongPassword,
  IsOptional,
  IsPhoneNumber,
  MaxLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserRoleEnum } from '../entities/types/user.roles.enum';

export class CreateUserDto {
  @MinLength(2)
  @MaxLength(20)
  @IsNotEmpty()
  @ApiProperty({ example: `Jean Moulin`, description: `Name` })
  name: string;

  @IsEmail({}, { message: `L'Email n'est pas valide` })
  @ApiProperty({
    example: `exemple.email@example.com`,
    description: `Email address`,
  })
  @IsNotEmpty({ message: `L'Email ne peut pas être vide` })
  public email!: string;

  @MinLength(3)
  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    },
    {
      message: `Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial`,
    },
  )
  @IsNotEmpty({ message: `Le mot de passe ne peut pas être vide` })
  public password!: string;

  @ApiProperty({
    enum: UserRoleEnum,
    enumName: `UserRoleEnum`,
    example: `Utilisateur`,
    description: `User role`,
  })
  public role: UserRoleEnum;

  @IsOptional()
  @IsPhoneNumber()
  public phone: string;

  @IsOptional()
  @IsString()
  picture: string;

  /*
  @IsOptional()
  @IsString()
  address: string
  */
}
