import {IsEmpty, IsInt, IsNotEmpty, Max, Min} from "class-validator";
import {UserResponseDto} from "../../users/dto/user-response.dto";
import {ResponseBarDto} from "../../bars/dto/response-bar.dto";

export class CreateUserBarRatingDto {
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @Max(5)
  public rate: number;

  @IsEmpty()
  public ratedAt!: Date;

  @IsEmpty()
  public user: UserResponseDto;

  @IsEmpty()
  public bar: ResponseBarDto;
}
