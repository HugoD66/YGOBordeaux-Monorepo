import { PartialType } from '@nestjs/mapped-types';
import { CreateBarDto } from './create-bar.dto';
import { IsEmpty, IsOptional, IsString } from 'class-validator';
import { UserResponseDto } from '../../users/dto/user-response.dto';

export class UpdateBarDto extends PartialType(CreateBarDto) {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  adresse: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  telephone: string;

  @IsOptional()
  createdBy?: UserResponseDto;

  @IsEmpty()
  updatedAt: Date = new Date();

  @IsOptional()
  @IsString()
  picture: string;
  /*
  @IsOptional()
  note?: number;
   */
}
