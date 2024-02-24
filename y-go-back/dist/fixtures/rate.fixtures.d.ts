import { UserBarRatingService } from "../user-bar-rating/user-bar-rating.service";
import { BarsService } from "../bars/bars.service";
import { UsersService } from "../users/users.service";
export declare class RateFixtures {
    private userBarRatingService;
    private usersService;
    private barsService;
    constructor(userBarRatingService: UserBarRatingService, usersService: UsersService, barsService: BarsService);
    seedRates(): Promise<void>;
}
