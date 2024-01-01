import { Test, TestingModule } from '@nestjs/testing';
import { UserBarRatingService } from './user-bar-rating.service';

describe('UserBarRatingService', () => {
  let service: UserBarRatingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserBarRatingService],
    }).compile();

    service = module.get<UserBarRatingService>(UserBarRatingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
