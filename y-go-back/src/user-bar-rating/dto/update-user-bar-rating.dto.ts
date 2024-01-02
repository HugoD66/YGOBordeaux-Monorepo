import { PartialType } from '@nestjs/swagger';
import { CreateUserBarRatingDto } from './create-user-bar-rating.dto';
import {UserResponseDto} from "../../users/dto/user-response.dto";
import {ResponseBarDto} from "../../bars/dto/response-bar.dto";

export class UpdateUserBarRatingDto extends PartialType(CreateUserBarRatingDto) {

  public rate: number;

  public ratedAt!: Date;

  public user: UserResponseDto;

  public bar: ResponseBarDto;
}
