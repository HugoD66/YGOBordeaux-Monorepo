import { Repository } from 'typeorm';
import { Bar } from '../bars/entities/bar.entity';
export declare class BarFixtures {
    private barRepository;
    constructor(barRepository: Repository<Bar>);
    seedBars(): Promise<void>;
}
