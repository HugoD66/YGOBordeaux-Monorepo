import { Repository } from 'typeorm';
import { Bar } from '../bars/entities/bar.entity';
import { BarsService } from "../bars/bars.service";
export declare class BarFixtures {
    private barRepository;
    private barsService;
    constructor(barRepository: Repository<Bar>, barsService: BarsService);
    seedBars(): Promise<void>;
}
