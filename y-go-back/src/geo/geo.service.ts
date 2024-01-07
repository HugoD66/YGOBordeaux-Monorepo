import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';
import { CreateGeoDto } from './dto/create-geo.dto';
import { UpdateGeoDto } from './dto/update-geo.dto';
import { HttpService } from '@nestjs/axios';
import { Repository } from 'typeorm';
import { Geo } from './entities/geo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ResponseGeoDto } from './dto/response-geo.dto';

@Injectable()
export class GeoService {
  private apiKey: string;
  private geocodingUrl: string;

  constructor(
    private readonly httpService: HttpService,

    private configService: ConfigService,

    @InjectRepository(Geo)
    private geoRepository: Repository<Geo>,
  ) {
    this.apiKey = this.configService.get(
      `MAPTILER_API_KEY`,
      `1bYmKrc8pg0FSu8GXalV`,
    );
    this.geocodingUrl = this.configService.get(
      `MAPTILER_GEOCODING_URL`,
      `https://api.maptiler.com/geocoding/`,
    );
  }

  async create(createGeoDto: CreateGeoDto): Promise<Geo> {
    try {
      const geo: CreateGeoDto = this.geoRepository.create(createGeoDto);
      const savedGeo: Geo = await this.geoRepository.save(geo);
      return savedGeo;
    } catch (error) {
      throw error;
    }
  }

  // async createGeo(lat: number, lng: number): Promise<ResponseGeoDto> {
  //  try {
  //    const geo = this.geoRepository.create(
  //      {
  //        x: lat,
  //        y: lng
  //      }
  //    );
  //    return await this.geoRepository.save(geo);
  //  } catch (error) {
  //    throw error;
  //  }
  // }

  async findOne(id: string): Promise<ResponseGeoDto> {
    const responseGeo: ResponseGeoDto = await this.geoRepository.findOne({
      where: { id },
    });
    return responseGeo;
  }

  async findAll(): Promise<ResponseGeoDto[]> {
    const geo: ResponseGeoDto[] = await this.geoRepository.find();
    return geo;
  }

  async getCoordinates(address: string): Promise<{ x: number; y: number }> {
    const url = `${this.geocodingUrl}${encodeURIComponent(address)}.json?key=${
      this.apiKey
    }`;
    console.log(url);
    const response = await lastValueFrom(this.httpService.get(url));
    const coordinates = response.data.features[0]?.geometry.coordinates;
    if (!coordinates) {
      throw new Error(`No coordinates found for the provided address`);
    }
    return { x: coordinates[0], y: coordinates[1] };
  }

  async getAdress(lat: number, lng: number): Promise<string> {
    const url = `${this.geocodingUrl}${lat},${lng}.json?key=${this.apiKey}`;
    const response = await lastValueFrom(this.httpService.get(url));
    if (!response.data.features[0].place_name) {
      return `Localisation inconnue`;
    }
    return response.data.features[0].place_name;
  }

  async update(
    id: string,
    updateGeoDto: Partial<UpdateGeoDto>,
  ): Promise<ResponseGeoDto> {
    await this.geoRepository.update(id, updateGeoDto);
    const updatedGeo: Geo = await this.geoRepository.findOne({ where: { id } });
    return updatedGeo;
  }

  async remove(id: string): Promise<void> {
    // @ts-ignore
    await this.geoRepository.remove(id);
  }
}
