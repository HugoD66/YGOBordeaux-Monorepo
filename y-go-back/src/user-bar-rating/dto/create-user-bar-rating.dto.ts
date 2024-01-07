import {
  IsEmpty,
  IsInt,
  IsNotEmpty,
  IsOptional,
  Max,
  Min,
} from 'class-validator';
import { UserResponseDto } from '../../users/dto/user-response.dto';
import { ResponseBarDto } from '../../bars/dto/response-bar.dto';

export class CreateUserBarRatingDto {
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @Max(5)
  public rate: number;

  @IsOptional()
  public ratedAt?: Date;

  @IsOptional()
  public updatedAt?: Date | null;

  @IsNotEmpty()
  public user: UserResponseDto;

  @IsNotEmpty()
  public bar: ResponseBarDto;
}
