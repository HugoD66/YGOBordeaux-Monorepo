import { Test, TestingModule } from '@nestjs/testing';
import { UserBarRatingController } from './user-bar-rating.controller';
import { UserBarRatingService } from './user-bar-rating.service';

describe(`UserBarRatingController`, () => {
  let controller: UserBarRatingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserBarRatingController],
      providers: [UserBarRatingService],
    }).compile();

    controller = module.get<UserBarRatingController>(UserBarRatingController);
  });

  it(`should be defined`, () => {
    expect(controller).toBeDefined();
  });
});
