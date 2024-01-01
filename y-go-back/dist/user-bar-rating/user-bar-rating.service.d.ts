import { CreateUserBarRatingDto } from './dto/create-user-bar-rating.dto';
import { UpdateUserBarRatingDto } from './dto/update-user-bar-rating.dto';
export declare class UserBarRatingService {
    create(createUserBarRatingDto: CreateUserBarRatingDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUserBarRatingDto: UpdateUserBarRatingDto): string;
    remove(id: number): string;
}
