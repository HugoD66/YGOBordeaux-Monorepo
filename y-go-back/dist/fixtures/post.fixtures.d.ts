import { BarsService } from '../bars/bars.service';
import { UsersService } from '../users/users.service';
import { Post } from '../post/entities/post.entity';
import { Repository } from 'typeorm';
export declare class PostFixtures {
    private postRepository;
    private usersService;
    private barsService;
    constructor(postRepository: Repository<Post>, usersService: UsersService, barsService: BarsService);
    seedPosts(): Promise<void>;
    private getRandomDate;
}
