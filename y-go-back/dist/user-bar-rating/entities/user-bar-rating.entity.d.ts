import { User } from "../../users/entities/user.entity";
import { Bar } from "../../bars/entities/bar.entity";
export declare class UserBarRating {
    id: number;
    rating: number;
    user: User;
    bar: Bar;
}
