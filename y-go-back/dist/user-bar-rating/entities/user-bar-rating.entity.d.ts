import { User } from "../../users/entities/user.entity";
import { Bar } from "../../bars/entities/bar.entity";
export declare class UserBarRating {
    id: string;
    rate: number;
    ratedAt: Date;
    updatedAt: Date;
    user: User;
    bar: Bar;
}
