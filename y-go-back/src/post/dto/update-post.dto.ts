import { PartialType } from '@nestjs/mapped-types';
import { IsString, Length, IsOptional, IsUUID } from 'class-validator';
import { CreatePostDto } from './create-post.dto';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  @IsOptional()
  @IsString()
  @Length(4, 280)
  message?: string;

  @IsOptional()
  @IsUUID()
  userId?: string;

  @IsOptional()
  @IsUUID()
  barId?: string;
}
