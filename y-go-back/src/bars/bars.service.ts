import {Injectable, NotFoundException} from "@nestjs/common"
import { CreateBarDto } from "./dto/create-bar.dto"
import { UpdateBarDto } from "./dto/update-bar.dto"
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Bar} from "./entities/bar.entity";
import {ResponseBarDto} from "./dto/response-bar.dto";
import {PictureList} from "../picture-list/entities/picture-list.entity";
import {PictureListService} from "../picture-list/picture-list.service";

@Injectable()
export class BarsService {
  constructor(
    @InjectRepository(Bar)
    private barRepository: Repository<Bar>,

    private pictureListService: PictureListService,
  ) {
  }

  async create(createBarDto: CreateBarDto): Promise<ResponseBarDto> {
    try {
      const bar: CreateBarDto = this.barRepository.create(createBarDto);
      if (createBarDto.pictureList) {
        const pictureList = new PictureList();
        bar.pictureList = await this.pictureListService.create(pictureList);
      }
      return await this.barRepository.save(bar);
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: string): Promise<Bar> {
    const bar = await this.barRepository
      .createQueryBuilder('bar')
      .leftJoinAndSelect('bar.pictureList', 'pictureList')
      .where('bar.id = :id', { id })
      .getOne();
    if (!bar) {
      throw new NotFoundException(`Bar with id ${id} not found`);
    }
    return bar;
    //const responseBar: ResponseBarDto = await this.barRepository.findOne({where: { id }});
    //return responseBar;
  }

  async findAll(): Promise<ResponseBarDto[]> {
    const barList: ResponseBarDto[] = await this.barRepository
      .createQueryBuilder('bar')
      .leftJoinAndSelect('bar.pictureList', 'pictureList')
      .getMany();

    return barList;
  }

  /*
  async findAll(): Promise<ResponseBarDto[]> {
    const barList: ResponseBarDto[] = await this.barRepository.find();
    return barList;
  }
   */

  async update(id: string, updateBarDto: Partial<UpdateBarDto>): Promise<ResponseBarDto> {
    await this.barRepository.update(id, updateBarDto);
    const updatedUser: Bar = await this.barRepository.findOne({ where: { id } })
    return updatedUser;
  }

  async remove(id: string): Promise<void> {
    await this.barRepository.delete(id);
  }
}
