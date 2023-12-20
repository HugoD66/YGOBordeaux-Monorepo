import { Repository } from 'typeorm';
import { Bar } from '../bars/entities/bar.entity';
import { BarsService } from "../bars/bars.service";
import { PictureListService } from "../picture-list/picture-list.service";
export declare class BarFixtures {
    private barRepository;
    private barsService;
    private readonly pictureListService;
    constructor(barRepository: Repository<Bar>, barsService: BarsService, pictureListService: PictureListService);
    seedBars(): Promise<void>;
}
