import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common"
import { UserBarRatingService } from "./user-bar-rating.service"
import { CreateUserBarRatingDto } from "./dto/create-user-bar-rating.dto"
import { UpdateUserBarRatingDto } from "./dto/update-user-bar-rating.dto"
import { ResponseRateDto } from "./dto/response-rate.dto"
import { Public } from "../users/auth/public.decorator"

@Controller(`user-bar-rating`)
export class UserBarRatingController {
  constructor(private readonly userBarRatingService: UserBarRatingService) {}
  @Public()
  @Post()
  async create(@Body() createUserBarRatingDto: CreateUserBarRatingDto): Promise<ResponseRateDto> {
    const rate: ResponseRateDto = await this.userBarRatingService.create(createUserBarRatingDto)
    return rate
  }

  @Public()
  @Get(`rates/:barId`)
  async findRatesByBarId(@Param(`barId`) barId: string): Promise<ResponseRateDto[]> {
    return await this.userBarRatingService.findAllRatesByBarId(barId)
  }

  @Public()
  @Get(`:id`)
  async findOne(@Param(`id`) id: string): Promise<ResponseRateDto> {
    const rate: ResponseRateDto = await this.userBarRatingService.findOne(id)
    return rate
  }

  @Public()
  @Get()
  async findAll(): Promise<ResponseRateDto[]> {
    const rateList: ResponseRateDto[] = await this.userBarRatingService.findAll()
    return rateList
  }

  @Public()
  @Get(`:id/count-voters`)
  async countAverages(@Param(`id`) id: string): Promise<number> {
    return await this.userBarRatingService.countVoters(id)
  }

  @Public()
  @Patch(`:id`)
  async update(
    @Param(`id`) id: string,
    @Body() updateUserBarRatingDto: UpdateUserBarRatingDto
  ): Promise<ResponseRateDto> {
    return await this.userBarRatingService.update(id, updateUserBarRatingDto)
  }

  @Delete(`:id`)
  async remove(@Param(`id`) id: string) {
    // const rate = await this.userBarRatingService.findOne(id);
    return this.userBarRatingService.remove(id)
  }
}
