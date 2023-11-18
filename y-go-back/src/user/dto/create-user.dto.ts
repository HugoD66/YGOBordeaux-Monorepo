import { IsString, IsEmail, IsOptional, IsNotEmpty } from "class-validator"

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
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
}
