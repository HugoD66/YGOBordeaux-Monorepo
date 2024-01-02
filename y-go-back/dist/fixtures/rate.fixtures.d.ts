import { UserBarRating } from "../user-bar-rating/entities/user-bar-rating.entity";
import { UserBarRatingService } from "../user-bar-rating/user-bar-rating.service";
import { BarsService } from "../bars/bars.service";
import { UsersService } from "../users/users.service";
export declare class RateFixtures {
    private userBarRatingRepository;
    private userBarRatingService;
    private usersService;
    private barsService;
    constructor(userBarRatingRepository: UserBarRating, userBarRatingService: UserBarRatingService, usersService: UsersService, barsService: BarsService);
    seedRates(): Promise<void>;
}
