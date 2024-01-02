import { CreateUserBarRatingDto } from './create-user-bar-rating.dto';
import { UserResponseDto } from "../../users/dto/user-response.dto";
import { ResponseBarDto } from "../../bars/dto/response-bar.dto";
declare const UpdateUserBarRatingDto_base: import("@nestjs/common").Type<Partial<CreateUserBarRatingDto>>;
export declare class UpdateUserBarRatingDto extends UpdateUserBarRatingDto_base {
    rate: number;
    ratedAt: Date;
    user: UserResponseDto;
    bar: ResponseBarDto;
}
export {};
