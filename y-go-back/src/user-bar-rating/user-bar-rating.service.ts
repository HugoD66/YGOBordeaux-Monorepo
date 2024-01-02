import {Injectable, NotFoundException} from '@nestjs/common';
import { CreateUserBarRatingDto } from './dto/create-user-bar-rating.dto';
import { UpdateUserBarRatingDto } from './dto/update-user-bar-rating.dto';
import {UserBarRating} from "./entities/user-bar-rating.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {ResponseRateDto} from "./dto/response-rate.dto";
import {UsersService} from "../users/users.service";
import {BarsService} from "../bars/bars.service";

@Injectable()
export class UserBarRatingService {
  constructor(
    @InjectRepository(UserBarRating)
    private rateRepository: Repository<UserBarRating>,

    private usersServices: UsersService,

    private barsService: BarsService
  ) {
  }

  async create(createUserBarRatingDto: CreateUserBarRatingDto): Promise<ResponseRateDto> {
    try {
      const user = await this.usersServices.findOne(createUserBarRatingDto.user.id);
      const bar = await this.barsService.findOnePartial(createUserBarRatingDto.bar.id);
      if (!user) {
        throw new NotFoundException(`User with ID ${createUserBarRatingDto.user.id} not found`);
      }
      if (!bar) {
        throw new NotFoundException(`Bar with ID ${createUserBarRatingDto.bar.id} not found`);
      }
      const existingRate = await this.rateRepository.findOne({
        where: {
          user: {id: user.id},
          bar: {id: bar.id},
        },
      });
      if (existingRate) {
        return this.update(existingRate.id, {rate: createUserBarRatingDto.rate});
      }
      const rate = this.rateRepository.create({
        ...createUserBarRatingDto,
        user,
        bar,
      });
      const savedRate = await this.rateRepository.save(rate);
      return savedRate;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: string): Promise<ResponseRateDto> {
    return this.rateRepository.findOne({ where: { id } });
  }

  findAll(): Promise<ResponseRateDto[]> {
    return this.rateRepository.find();
  }

  async update(id: string, updateUserBarRatingDto: Partial<UpdateUserBarRatingDto>): Promise<ResponseRateDto> {
    // @ts-ignore
    await this.rateRepository.update(id, updateUserBarRatingDto);
    const updatedRate: UserBarRating = await this.rateRepository.findOne( { where: { id } });
    return updatedRate
  }

  async remove(id: string): Promise<void> {
    await this.rateRepository.delete(id);
  }
}
