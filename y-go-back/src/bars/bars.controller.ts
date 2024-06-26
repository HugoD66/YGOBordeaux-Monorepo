import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  UseGuards,
  Req,
} from '@nestjs/common';
import { BarsService } from './bars.service';
import { CreateBarDto } from './dto/create-bar.dto';
import { UpdateBarDto } from './dto/update-bar.dto';
import { ResponseBarDto } from './dto/response-bar.dto';
import { Public } from '../users/auth/public.decorator';
import { AuthGuard } from '../users/auth/auth.guard';

@Controller(`bars`)
export class BarsController {
  constructor(private readonly barService: BarsService) {}

  @Post()
  @UseGuards(AuthGuard)
  async create(
    @Req() req,
    @Body() createBarDto: CreateBarDto,
  ): Promise<ResponseBarDto> {
    const bar: ResponseBarDto = await this.barService.create(
      createBarDto,
      req.user.id,
    );
    return bar;
  }

  @Public()
  @Get(`:id`)
  async findOne(@Param(`id`) id: string): Promise<ResponseBarDto> {
    const barSelected: ResponseBarDto = await this.barService.findOne(id);
    if (!barSelected) {
      throw new NotFoundException(`Bar with id ${id} not found`);
    }
    return barSelected;
  }

  @Public()
  @Get()
  async findAll(): Promise<ResponseBarDto[]> {
    const barList: ResponseBarDto[] = await this.barService.findAll();
    if (!barList) {
      throw new NotFoundException(`BarList not found`);
    }
    return barList;
  }

  @Patch(`:id`)
  async update(
    @Param(`id`) id: string,
    @Body() updateBarDto: UpdateBarDto,
  ): Promise<ResponseBarDto> {
    const barUpdated: ResponseBarDto = await this.barService.update(
      id,
      updateBarDto,
    );
    return barUpdated;
  }

  @Delete(`:id`)
  async remove(@Param(`id`) id: string): Promise<void> {
    const bar: ResponseBarDto = await this.barService.findOne(id);
    if (!bar) {
      throw new NotFoundException(`Bar does not exist!`);
    }
    await this.barService.remove(id);
  }

  @Delete()
  async removeAllBars(): Promise<void> {
    const bars = await this.barService.findAll();
    bars.forEach((bar) => {
      this.barService.remove(bar.id);
    });
  }
}
