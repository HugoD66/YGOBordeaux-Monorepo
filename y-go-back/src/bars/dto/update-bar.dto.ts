import { PartialType } from '@nestjs/mapped-types';
import { CreateBarDto } from './create-bar.dto';
import {IsArray, IsEmpty, IsEnum, IsOptional, IsString} from 'class-validator';
import { UserResponseDto } from '../../users/dto/user-response.dto';
import {ParticularityEnum} from "../entities/types/particularity.enum";

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

  //Génération auto ?
  //@IsEmpty()
  //updatedAt: Date = new Date();

  @IsOptional()
  @IsString()
  picture: string;

  @IsOptional()
  @IsArray()
  @IsEnum(ParticularityEnum, { each: true })
  particularities?: ParticularityEnum[];

  /*
  @IsOptional()
  note?: number;
   */
}
