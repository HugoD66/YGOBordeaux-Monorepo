import { GeoService } from './geo.service';
import { CreateGeoDto } from './dto/create-geo.dto';
import { UpdateGeoDto } from './dto/update-geo.dto';
import { ResponseGeoDto } from "./dto/response-geo.dto";
export declare class GeoController {
    private readonly geoService;
    constructor(geoService: GeoService);
    create(createGeoDto: CreateGeoDto): Promise<CreateGeoDto>;
    findAll(): Promise<ResponseGeoDto[]>;
    findOneByAdress(address: string): Promise<{
        x: number;
        y: number;
    }>;
    findOneByGeo(lat: number, lng: number): Promise<string>;
    update(id: string, updateGeoDto: UpdateGeoDto): Promise<ResponseGeoDto>;
    remove(id: string): Promise<void>;
}
