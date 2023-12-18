import { Injectable } from "@nestjs/common"
import { CreateBarDto } from "./dto/create-bar.dto"
import { UpdateBarDto } from "./dto/update-bar.dto"
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Bar} from "./entities/bar.entity";
import {ResponseBarDto} from "./dto/response-bar.dto";

@Injectable()
export class BarsService {
  constructor(
    @InjectRepository(Bar)
    private barRepository: Repository<Bar>,
  ) {
  }

  async create(createBarDto: CreateBarDto): Promise<ResponseBarDto> {
    try {
      const bar: CreateBarDto = this.barRepository.create(createBarDto);
      const savedBar: Bar = await this.barRepository.save(bar);
      return savedBar;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: string): Promise<ResponseBarDto> {
    const responseBar: ResponseBarDto = await this.barRepository.findOne({where: { id }});
    return responseBar;
  }

  async findAll(): Promise<ResponseBarDto[]> {
    const barList: ResponseBarDto[] = await this.barRepository.find();
    return barList;
  }

  async update(id: string, updateBarDto: Partial<UpdateBarDto>): Promise<ResponseBarDto> {
    await this.barRepository.update(id, updateBarDto);
    const updatedUser = await this.barRepository.findOne({ where: { id } })
    return updatedUser;
  }

  async remove(id: string): Promise<void> {
    await this.barRepository.delete(id);
  }
}
