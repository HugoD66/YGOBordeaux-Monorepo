import { Module } from '@nestjs/common';
import { UserBarRatingService } from './user-bar-rating.service';
import { UserBarRatingController } from './user-bar-rating.controller';

@Module({
  controllers: [UserBarRatingController],
  providers: [UserBarRatingService],
})
export class UserBarRatingModule {}
