import { User } from '../../users/entities/user.entity';
import { Bar } from '../../bars/entities/bar.entity';
export declare class Post {
    id: string;
    message: string;
    createdAt: Date;
    user: User;
    bar: Bar;
}
