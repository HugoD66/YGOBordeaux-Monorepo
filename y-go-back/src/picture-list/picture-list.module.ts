import { Module } from '@nestjs/common';
import { PictureListService } from './picture-list.service';
import { PictureListController } from './picture-list.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PictureList } from './entities/picture-list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PictureList])],
  controllers: [PictureListController],
  providers: [PictureListService],
  exports: [PictureListService],
})
export class PictureListModule {}
