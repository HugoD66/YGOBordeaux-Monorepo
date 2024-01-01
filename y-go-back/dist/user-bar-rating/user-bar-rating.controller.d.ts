import { UserBarRatingService } from './user-bar-rating.service';
import { CreateUserBarRatingDto } from './dto/create-user-bar-rating.dto';
import { UpdateUserBarRatingDto } from './dto/update-user-bar-rating.dto';
export declare class UserBarRatingController {
    private readonly userBarRatingService;
    constructor(userBarRatingService: UserBarRatingService);
    create(createUserBarRatingDto: CreateUserBarRatingDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateUserBarRatingDto: UpdateUserBarRatingDto): string;
    remove(id: string): string;
}
