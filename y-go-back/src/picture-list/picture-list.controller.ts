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
  UploadedFile, UploadedFiles
} from '@nestjs/common';
import { PictureListService } from './picture-list.service';
import { CreatePictureListDto } from './dto/create-picture-list.dto';
import { UpdatePictureListDto } from './dto/update-picture-list.dto';
import {Public} from "../users/auth/public.decorator";
import {ResponsePictureListDto} from "./dto/response-picture-list.dto";
import {FileInterceptor, FilesInterceptor} from "@nestjs/platform-express";
import {multerConfig} from "../multer.config";
import {FileSizeValidationPipe} from "../pipe/FileSizeValidationPipe";

@Controller('picture-list')
export class PictureListController {
  constructor(private readonly pictureListService: PictureListService) {}

  @Public()
  @Post()
  async create(@Body() createPictureListDto: CreatePictureListDto): Promise<CreatePictureListDto> {
    const barList: ResponsePictureListDto = await this.pictureListService.create(createPictureListDto);
    return barList;
  }

  @Public()
  @Post('upload-files/:pictureListId')
  @UseInterceptors(FilesInterceptor('files', 3, multerConfig))
  async uploadFiles(
    @Param('pictureListId') pictureListId: string,
    @UploadedFiles(new FileSizeValidationPipe()) files: Array<Express.Multer.File>
  ) {
    const filePaths = files.map(file => file.path);
    await this.pictureListService.update(pictureListId, { pictures: filePaths });
    return {
      message: 'Pictures uploaded successfully',
      filePaths
    };
  }

  @Public()
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ResponsePictureListDto> {
    const pictureListSelected: ResponsePictureListDto = await this.pictureListService.findOne(id);
    if(!pictureListSelected){
      throw new NotFoundException(`PictureList with id ${id} not found`)
    }
    return pictureListSelected;
  }

  @Public()
  @Get()
  async findAll(): Promise<ResponsePictureListDto[]> {
    const pictureList: ResponsePictureListDto[] = await this.pictureListService.findAll();
    if(!pictureList){
      throw new NotFoundException(`PictureList not found`)
    }
    return pictureList;
  }

  @Public()
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePictureListDto: UpdatePictureListDto): Promise<ResponsePictureListDto> {
    const pictureListUpdated: ResponsePictureListDto = await this.pictureListService.update(id, updatePictureListDto);
    return pictureListUpdated;
  }

  @Public()
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    const pictureList: ResponsePictureListDto = await this.pictureListService.findOne(id);
    if(!pictureList){
      throw new NotFoundException(`PictureList with id ${id} not found`)
    }
    await this.pictureListService.remove(id);
  }
}
