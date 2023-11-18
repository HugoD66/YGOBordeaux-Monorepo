import { PartialType } from "@nestjs/mapped-types"
import { IsString, IsEmail, IsOptional } from "class-validator"
import { CreateUserDto } from "./create-user.dto"

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsOptional()
  @IsString()
  name: string

  @IsOptional()
  @IsString()
  username: string

  @IsOptional()
  @IsString()
  address: string

  @IsOptional()
  @IsEmail()
  email: string

  @IsOptional()
  @IsString()
  phone: string
}
