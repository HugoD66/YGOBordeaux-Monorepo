import { Repository } from 'typeorm';
import { Bar } from '../bars/entities/bar.entity';
import { BarsService } from "../bars/bars.service";
import { PictureListService } from "../picture-list/picture-list.service";
import { GeoService } from "../geo/geo.service";
import { UsersService } from "../users/users.service";
export declare class BarFixtures {
    private barRepository;
    private barsService;
    private readonly pictureListService;
    private readonly geoService;
    private readonly usersService;
    constructor(barRepository: Repository<Bar>, barsService: BarsService, pictureListService: PictureListService, geoService: GeoService, usersService: UsersService);
    seedBars(): Promise<void>;
}
