import { ConfigService } from '@nestjs/config';
import { CreateGeoDto } from './dto/create-geo.dto';
import { UpdateGeoDto } from './dto/update-geo.dto';
import { HttpService } from "@nestjs/axios";
import { Repository } from "typeorm";
import { Geo } from "./entities/geo.entity";
import { ResponseGeoDto } from "./dto/response-geo.dto";
export declare class GeoService {
    private readonly httpService;
    private configService;
    private geoRepository;
    private apiKey;
    private geocodingUrl;
    constructor(httpService: HttpService, configService: ConfigService, geoRepository: Repository<Geo>);
    create(createGeoDto: CreateGeoDto): Promise<ResponseGeoDto>;
    findOne(id: string): Promise<ResponseGeoDto>;
    findAll(): Promise<ResponseGeoDto[]>;
    getCoordinates(address: string): Promise<{
        x: number;
        y: number;
    }>;
    getAdress(lat: number, lng: number): Promise<string>;
    update(id: string, updateGeoDto: Partial<UpdateGeoDto>): Promise<ResponseGeoDto>;
    remove(id: string): Promise<void>;
}
