import { CreatePictureListDto } from './dto/create-picture-list.dto';
import { UpdatePictureListDto } from './dto/update-picture-list.dto';
import { PictureList } from './entities/picture-list.entity';
import { Repository } from 'typeorm';
import { ResponsePictureListDto } from './dto/response-picture-list.dto';
export declare class PictureListService {
  private pictureListRepository;
  constructor(pictureListRepository: Repository<PictureList>);
  create(
    createPictureListDto: CreatePictureListDto,
  ): Promise<ResponsePictureListDto>;
  findOne(id: string): Promise<ResponsePictureListDto>;
  findAll(): Promise<ResponsePictureListDto[]>;
  update(
    id: string,
    updatePictureListDto: Partial<UpdatePictureListDto>,
  ): Promise<ResponsePictureListDto>;
  remove(id: string): Promise<void>;
}
