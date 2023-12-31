import { CreateBarDto } from "./dto/create-bar.dto";
import { UpdateBarDto } from "./dto/update-bar.dto";
import { Repository } from "typeorm";
import { Bar } from "./entities/bar.entity";
import { ResponseBarDto } from "./dto/response-bar.dto";
import { PictureListService } from "../picture-list/picture-list.service";
import { GeoService } from "../geo/geo.service";
export declare class BarsService {
    private barRepository;
    private pictureListService;
    private geoService;
    constructor(barRepository: Repository<Bar>, pictureListService: PictureListService, geoService: GeoService);
    create(createBarDto: CreateBarDto): Promise<ResponseBarDto>;
    findOne(id: string): Promise<Bar>;
    findAll(): Promise<ResponseBarDto[]>;
    update(id: string, updateBarDto: Partial<UpdateBarDto>): Promise<ResponseBarDto>;
    remove(id: string): Promise<void>;
}
