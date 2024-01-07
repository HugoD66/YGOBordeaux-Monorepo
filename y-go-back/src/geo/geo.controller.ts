import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { GeoService } from './geo.service';
import { CreateGeoDto } from './dto/create-geo.dto';
import { UpdateGeoDto } from './dto/update-geo.dto';
import { Public } from '../users/auth/public.decorator';
import { ResponseGeoDto } from './dto/response-geo.dto';
import { environment } from 'y-go-front/env';
import { GeoModel } from 'y-go-front/src/app/models/geo.model';
import { catchError, tap } from 'rxjs';

@Controller(`geo`)
export class GeoController {
  constructor(private readonly geoService: GeoService) {}

  @Public()
  @Post()
  async create(@Body() createGeoDto: CreateGeoDto): Promise<CreateGeoDto> {
    const geo: ResponseGeoDto = await this.geoService.create(createGeoDto);
    return geo;
  }

  // @Post()
  // async createGeoByClic(
  //  @Query('lat') lat: number,
  //  @Query('lng') lng: number) {
  //  const geo: ResponseGeoDto = await this.geoService.createGeo(lat, lng);
  //
  // }

  @Public()
  @Get()
  async findAll(): Promise<ResponseGeoDto[]> {
    const geo: ResponseGeoDto[] = await this.geoService.findAll();
    return geo;
  }

  @Public()
  @Get(`coordinates`)
  async findOneByAdress(@Query(`address`) address: string) {
    // : Promise<{ x: number; y: number }>
    try {
      const coordinates = await this.geoService.getCoordinates(address);
      return coordinates;
    } catch (error) {
      throw new Error(`Error fetching coordinates`);
    }
  }

  @Public()
  @Get(`reverse-geocoding`)
  async findOneByGeo(@Query(`lat`) lat: number, @Query(`lng`) lng: number) {
    return this.geoService.getAdress(lat, lng);
  }

  @Public()
  @Patch(`:id`)
  update(
    @Param(`id`) id: string,
    @Body() updateGeoDto: UpdateGeoDto,
  ): Promise<ResponseGeoDto> {
    return this.geoService.update(id, updateGeoDto);
  }

  @Public()
  @Delete(`:id`)
  async remove(@Param(`id`) id: string): Promise<void> {
    const geo: ResponseGeoDto = await this.geoService.findOne(id);
    if (!geo) {
      throw new NotFoundException(`Geo with id ${id} not found`);
    }
    return this.geoService.remove(id);
  }
}
