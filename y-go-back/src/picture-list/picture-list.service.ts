import { Injectable } from '@nestjs/common';
import { CreatePictureListDto } from './dto/create-picture-list.dto';
import { UpdatePictureListDto } from './dto/update-picture-list.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PictureList } from './entities/picture-list.entity';
import { Repository } from 'typeorm';
import { ResponsePictureListDto } from './dto/response-picture-list.dto';

@Injectable()
export class PictureListService {
  constructor(
    @InjectRepository(PictureList)
    private pictureListRepository: Repository<PictureList>,
  ) {}

  async create(
    createPictureListDto: CreatePictureListDto,
  ): Promise<ResponsePictureListDto> {
    try {
      const pictureList: CreatePictureListDto =
        this.pictureListRepository.create(createPictureListDto);
      const savedPictureList: PictureList =
        await this.pictureListRepository.save(pictureList);
      return savedPictureList;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: string): Promise<ResponsePictureListDto> {
    const responsePictureList: ResponsePictureListDto =
      await this.pictureListRepository.findOne({ where: { id } });
    return responsePictureList;
  }

  async findAll(): Promise<ResponsePictureListDto[]> {
    const pictureList: ResponsePictureListDto[] =
      await this.pictureListRepository.find();
    return pictureList;
  }

  async update(
    id: string,
    updatePictureListDto: Partial<UpdatePictureListDto>,
  ): Promise<ResponsePictureListDto> {
    await this.pictureListRepository.update(id, updatePictureListDto);
    const updatedPictureList: PictureList =
      await this.pictureListRepository.findOne({ where: { id } });
    return updatedPictureList;
  }

  async remove(id: string): Promise<void> {
    await this.pictureListRepository.delete(id);
  }
}
