import { UserBarRatingService } from './user-bar-rating.service';
import { CreateUserBarRatingDto } from './dto/create-user-bar-rating.dto';
import { UpdateUserBarRatingDto } from './dto/update-user-bar-rating.dto';
import { ResponseRateDto } from './dto/response-rate.dto';
export declare class UserBarRatingController {
  private readonly userBarRatingService;
  constructor(userBarRatingService: UserBarRatingService);
  create(
    createUserBarRatingDto: CreateUserBarRatingDto,
  ): Promise<ResponseRateDto>;
  findOne(id: string): Promise<ResponseRateDto>;
  findAll(): Promise<ResponseRateDto[]>;
  countAverages(id: string): Promise<number>;
  update(
    id: string,
    updateUserBarRatingDto: UpdateUserBarRatingDto,
  ): Promise<ResponseRateDto>;
  remove(id: string): Promise<void>;
}
