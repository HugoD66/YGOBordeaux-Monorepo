import { PartialType } from '@nestjs/swagger';
import { CreatePictureListDto } from './create-picture-list.dto';
import {IsArray, IsOptional, IsString} from "class-validator";

export class UpdatePictureListDto extends PartialType(CreatePictureListDto) {
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  pictures: string[];
}
