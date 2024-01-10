import { CreateUserBarRatingDto } from './dto/create-user-bar-rating.dto';
import { UpdateUserBarRatingDto } from './dto/update-user-bar-rating.dto';
import { UserBarRating } from './entities/user-bar-rating.entity';
import { Repository } from 'typeorm';
import { ResponseRateDto } from './dto/response-rate.dto';
import { UsersService } from '../users/users.service';
import { BarsService } from '../bars/bars.service';
export declare class UserBarRatingService {
    private rateRepository;
    private usersServices;
    private barsService;
    constructor(rateRepository: Repository<UserBarRating>, usersServices: UsersService, barsService: BarsService);
    create(createUserBarRatingDto: CreateUserBarRatingDto): Promise<ResponseRateDto>;
    findOne(id: string): Promise<ResponseRateDto>;
    findAll(): Promise<ResponseRateDto[]>;
    update(id: string, updateUserBarRatingDto: Partial<UpdateUserBarRatingDto>): Promise<ResponseRateDto>;
    private updateBarAverageRating;
    countVoters(barId: string): Promise<number>;
    remove(id: string): Promise<void>;
}
