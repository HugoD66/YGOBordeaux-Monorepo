import { ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Public } from '../users/auth/public.decorator';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.services';
import { ResponsePostDto } from './dto/response-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { SanitizeGuard } from '../guard/sanitize.guard';

@Controller(`posts`)
@ApiTags(`Posts`)
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  // @UseGuards(SanitizeGuard)
  @Post()
  async create(
    @Body() createPostDto: CreatePostDto,
    @Req() req,
  ): Promise<ResponsePostDto> {
    console.log(createPostDto);
    const post: ResponsePostDto = await this.postsService.create(
      createPostDto,
      req.user.sub,
    );
    return post;
  }

  @Public() // TEMP
  @Get(`:id`)
  async findOne(@Param(`id`) id: string): Promise<ResponsePostDto> {
    const postSelected: ResponsePostDto = await this.postsService.findOne(id);
    if (!postSelected) {
      throw new NotFoundException(`Post with id ${id} not found`);
    }
    return postSelected;
  }

  @Public()
  @Get()
  async findAll(): Promise<ResponsePostDto[]> {
    const postList: ResponsePostDto[] = await this.postsService.findAll();
    if (!postList) {
      throw new NotFoundException(`PostList not found`);
    }
    return postList;
  }

  @Public()
  @Get(`by-bar/:barId`)
  async findAllByBar(
    @Param(`barId`) barId: string,
  ): Promise<ResponsePostDto[] | ResponsePostDto | null> {
    const postList: ResponsePostDto[] | ResponsePostDto | null =
      await this.postsService.findAllByBar(barId);
    if (!postList) {
      throw new NotFoundException(`PostList not found`);
    }
    return postList;
  }

  @Public()
  @Get(`by-user/:userId`)
  async findAllByUser(
    @Param(`userId`) userId: string,
  ): Promise<ResponsePostDto[] | ResponsePostDto | null> {
    const postList: ResponsePostDto[] | ResponsePostDto | null =
      await this.postsService.findAllByUser(userId);
    if (!postList) {
      throw new NotFoundException(`PostList not found`);
    }
    return postList;
  }

  // @UseGuards(SanitizeGuard)
  @Patch(`:id`)
  async update(
    @Param(`id`) id: string,
    @Body() updatePostDto: UpdatePostDto,
  ): Promise<ResponsePostDto> {
    const postUpdated: ResponsePostDto = await this.postsService.update(
      id,
      updatePostDto,
    );
    return postUpdated;
  }

  @Delete(`:id`)
  async remove(@Param(`id`) id: string): Promise<void> {
    const post: ResponsePostDto = await this.postsService.findOne(id);
    if (!post) {
      throw new NotFoundException(`Post does not exist!`);
    }
    await this.postsService.remove(id);
  }
}
