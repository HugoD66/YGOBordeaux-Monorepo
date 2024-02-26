import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBarDto } from './dto/create-bar.dto';
import { UpdateBarDto } from './dto/update-bar.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bar } from './entities/bar.entity';
import { ResponseBarDto } from './dto/response-bar.dto';
import { PictureListService } from '../picture-list/picture-list.service';
import { GeoService } from '../geo/geo.service';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';

@Injectable()
export class BarsService {
  constructor(
    @InjectRepository(Bar)
    private barRepository: Repository<Bar>,

    private pictureListService: PictureListService,

    private geoService: GeoService,

    private usersService: UsersService,
  ) {}

  async create(createBarDto: CreateBarDto, userId?: string): Promise<Bar> {
    try {
      let user = await this.usersService.findOne(userId);
      let pictureListEntity = await this.pictureListService.create(
        createBarDto.pictureList,
      );
      let geoEntity = await this.geoService.create(createBarDto.geo);
      const bar = this.barRepository.create({
        ...createBarDto,
        createdBy: user,
        pictureList: pictureListEntity,
        geo: geoEntity,
      });

      return await this.barRepository.save(bar);
    } catch (error) {
      throw error;
    }
  }

  /*
  async create(createBarDto: CreateBarDto, userId: string): Promise<Bar> {
    try {
      // Ajoutez la propriété createdBy à createBarDto
      const barData = { ...createBarDto, createdBy: userId };

      // Créez l'instance de Bar avec les données complètes
      const bar = this.barRepository.create(barData);

      // Gestion de pictureList et geo
      if (createBarDto.pictureList) {
        const pictureList = new PictureList();
        bar.pictureList = await this.pictureListService.create(pictureList);
      }
      if (createBarDto.geo) {
        const geo = new Geo();
        bar.geo = await this.geoService.create(geo);
      }

      // Sauvegardez le bar dans la base de données
      return await this.barRepository.save(bar);
    } catch (error) {
      throw error;
    }
  }
  */

  async findOne(id: string): Promise<Bar> {
    const bar = await this.barRepository
      .createQueryBuilder(`bar`)
      .leftJoinAndSelect(`bar.pictureList`, `pictureList`)
      .leftJoinAndSelect(`bar.geo`, `geo`)
      .leftJoinAndSelect(`bar.createdBy`, `createdBy`)
      .where(`bar.id = :id`, { id })
      .getOne();
    if (!bar) {
      throw new NotFoundException(`Bar with id ${id} not found`);
    }
    return bar;
  }

  // For fixtures
  async findOneRandom(): Promise<Bar> {
    const bars: Bar[] = await this.barRepository.find();
    return bars[Math.floor(Math.random() * bars.length)];
  }

  async findOnePartial(id: string): Promise<Bar> {
    return this.barRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<ResponseBarDto[]> {
    const barList: ResponseBarDto[] = await this.barRepository
      .createQueryBuilder(`bar`)
      .leftJoinAndSelect(`bar.pictureList`, `pictureList`)
      .leftJoinAndSelect(`bar.geo`, `geo`)
      .leftJoinAndSelect(`bar.createdBy`, `createdBy`)
      .getMany();

    return barList;
  }

  /*
  async findAll(): Promise<ResponseBarDto[]> {
    const barList: ResponseBarDto[] = await this.barRepository.find();
    return barList;
  }
   */

  async update(
    id: string,
    updateBarDto: Partial<UpdateBarDto>,
  ): Promise<ResponseBarDto> {
    // @ts-ignore
    await this.barRepository.update(id, updateBarDto);
    const updatedUser: Bar = await this.barRepository.findOne({
      where: { id },
    });
    return updatedUser;
  }

  async remove(id: string): Promise<void> {
    await this.barRepository.delete(id);
  }

  async updateAverageRating(barId: string, note: number): Promise<void> {
    await this.barRepository.update(barId, { note });
  }
}
