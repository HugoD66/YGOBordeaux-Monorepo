import { UserResponseDto } from "../../users/dto/user-response.dto";
import { ResponseBarDto } from "../../bars/dto/response-bar.dto";
export declare class CreateUserBarRatingDto {
    rate: number;
    ratedAt: Date;
    user: UserResponseDto;
    bar: ResponseBarDto;
}
