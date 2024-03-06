import { Post } from './entities/post.entity';
import { BarsService } from '../bars/bars.service';
import { UsersService } from '../users/users.service';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ResponsePostDto } from './dto/response-post.dto';
export declare class PostsService {
    private postRepository;
    private usersService;
    private barsService;
    constructor(postRepository: Repository<Post>, usersService: UsersService, barsService: BarsService);
    create(createPostDto: CreatePostDto, userId: string): Promise<Post>;
    findOne(id: string): Promise<ResponsePostDto>;
    findAll(): Promise<ResponsePostDto[]>;
    findAllByBar(barId: string): Promise<ResponsePostDto[] | ResponsePostDto | null>;
    update(id: string, updatePostDto: UpdatePostDto): Promise<Post>;
    remove(id: string): Promise<void>;
}
