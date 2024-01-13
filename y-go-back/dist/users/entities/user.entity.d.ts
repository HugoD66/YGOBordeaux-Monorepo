import { UserRoleEnum } from './types/user.roles.enum';
import { Bar } from '../../bars/entities/bar.entity';
import { UserBarRating } from '../../user-bar-rating/entities/user-bar-rating.entity';
export declare class User {
    id: string;
    name: string;
    email: string;
    password: string;
    picture: string | null;
    role: UserRoleEnum;
    phone: string | null;
    createBars?: Bar[] | null;
    userBarRatings?: UserBarRating[] | null;
}
