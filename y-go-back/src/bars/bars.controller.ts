import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  UseInterceptors,
  UploadedFile
} from "@nestjs/common"
import { BarsService } from "./bars.service"
import { CreateBarDto } from "./dto/create-bar.dto"
import { UpdateBarDto } from "./dto/update-bar.dto"
import {ResponseBarDto} from "./dto/response-bar.dto";
import {Public} from "../users/auth/public.decorator";
import {FileInterceptor} from "@nestjs/platform-express";
import {multerConfig} from "../multer.config";
import {FileSizeValidationPipe} from "../pipe/FileSizeValidationPipe";

@Controller(`bars`)
export class BarsController {
  constructor(private readonly barService: BarsService) {}

  @Public() //TEMP
  @Post()
  async create(@Body() createBarDto: CreateBarDto): Promise<CreateBarDto> {
    const bar: ResponseBarDto = await this.barService.create(createBarDto);
    return bar;
  }

  @Public() //TEMP
  @Post('upload-file/:barId')
  @UseInterceptors(FileInterceptor('file', multerConfig))
  async uploadFile(
    @Param('barId') barId: string,
    @UploadedFile(new FileSizeValidationPipe()) file: Express.Multer.File
  ) {
    await this.barService.update(barId, { picture: file.path });
    return { message: 'File uploaded successfully', filePath: file.path };
  }

  @Public() //TEMP
  @Get(`:id`)
  async findOne(@Param(`id`) id: string): Promise<ResponseBarDto> {
    const barSelected = await this.barService.findOne(id)
    if(!barSelected){
      throw new Error(`Bar with id ${id} not found`)
    }
    return barSelected;
  }

  @Public()
  @Get()
  async findAll(): Promise<ResponseBarDto[]> {
    const barList: ResponseBarDto[] = await this.barService.findAll()
    return barList;
  }

  @Patch(`:id`)
  async update(@Param(`id`) id: string, @Body() updateBarDto: UpdateBarDto): Promise<ResponseBarDto> {
    return this.barService.update(id, updateBarDto)
  }

  @Delete(`:id`)
  async remove(@Param(`id`) id: string): Promise<void> {
    const bar: ResponseBarDto = await this.barService.findOne(id)
    if (!bar) {
      throw new NotFoundException(`Bar does not exist!`)
    }
    return this.barService.remove(id)
  }
}
