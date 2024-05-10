import { Injectable, NotFoundException } from '@nestjs/common';
import { Post } from './entities/post.entity';
import { BarsService } from '../bars/bars.service';
import { UsersService } from '../users/users.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ResponsePostDto } from './dto/response-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,

    private usersService: UsersService,

    private barsService: BarsService,
  ) {}

  async create(createPostDto: CreatePostDto, userId: string): Promise<Post> {
    try {
      const user = await this.usersService.findOne(userId);
      const bar = await this.barsService.findOne(createPostDto.barId);
      const post = this.postRepository.create({
        message: createPostDto.message,
        user: user,
        bar: bar,
      });

      return await this.postRepository.save(post);
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: string): Promise<ResponsePostDto> {
    return await this.postRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<ResponsePostDto[]> {
    return await this.postRepository.find();
  }

  async findAllByBar(
    barId: string,
  ): Promise<ResponsePostDto[] | ResponsePostDto | null> {
    return await this.postRepository.find({
      where: { bar: { id: barId } },
      relations: ['user'],
    });
  }

  async findAllByUser(
    userId: string,
  ): Promise<ResponsePostDto[] | ResponsePostDto | null> {
    return await this.postRepository.find({ where: { user: { id: userId } } });
  }
  async update(id: string, updatePostDto: UpdatePostDto): Promise<Post> {
    const post = await this.postRepository.preload({
      id: id,
      ...updatePostDto,
    });

    if (!post) {
      throw new NotFoundException(`Post with id ${id} not found`);
    }

    return await this.postRepository.save(post);
  }

  async remove(id: string): Promise<void> {
    const post = await this.findOne(id);

    if (!post) {
      throw new NotFoundException(`Post with id ${id} not found`);
    }

    await this.postRepository.delete(id);
  }
}
