import { Test, TestingModule } from '@nestjs/testing';
import { PictureListController } from './picture-list.controller';
import { PictureListService } from './picture-list.service';

describe(`PictureListController`, () => {
  let controller: PictureListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PictureListController],
      providers: [PictureListService],
    }).compile();

    controller = module.get<PictureListController>(PictureListController);
  });

  it(`should be defined`, () => {
    expect(controller).toBeDefined();
  });
});
