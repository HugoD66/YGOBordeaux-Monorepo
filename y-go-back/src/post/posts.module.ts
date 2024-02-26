import { PostsService } from './posts.services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { BarsModule } from '../bars/bars.module';
import { UsersModule } from '../users/users.module';
import { Post } from './entities/post.entity';
import { PostFixtures } from '../fixtures/post.fixtures';

@Module({
  imports: [TypeOrmModule.forFeature([Post]), UsersModule, BarsModule],
  controllers: [PostsController],
  providers: [PostFixtures, PostsService],
  exports: [PostsService],
})
export class PostsModule {}
