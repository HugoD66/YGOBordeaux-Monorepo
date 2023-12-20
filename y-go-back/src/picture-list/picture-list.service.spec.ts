import { Test, TestingModule } from '@nestjs/testing';
import { PictureListService } from './picture-list.service';

describe('PictureListService', () => {
  let service: PictureListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PictureListService],
    }).compile();

    service = module.get<PictureListService>(PictureListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
