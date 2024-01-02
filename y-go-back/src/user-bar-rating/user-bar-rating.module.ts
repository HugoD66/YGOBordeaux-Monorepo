import { Module } from '@nestjs/common';
import { UserBarRatingService } from './user-bar-rating.service';
import { UserBarRatingController } from './user-bar-rating.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsersModule} from "../users/users.module";
import {UserBarRating} from "./entities/user-bar-rating.entity";
import {BarsModule} from "../bars/bars.module";
import {RateFixtures} from "../fixtures/rate.fixtures";

@Module({
  imports: [TypeOrmModule.forFeature([UserBarRating]),UsersModule, BarsModule],
  exports: [UserBarRatingService],
  controllers: [UserBarRatingController],
  providers: [RateFixtures, UserBarRatingService],
})
export class UserBarRatingModule {}
