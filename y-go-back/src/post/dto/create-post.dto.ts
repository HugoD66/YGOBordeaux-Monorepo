import { IsString, Length, IsUUID, IsDate } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @Length(4, 280)
  message!: string;

  @IsDate()
  createdAt!: Date;

  @IsUUID()
  userId!: string;

  @IsUUID()
  barId!: string;
}
