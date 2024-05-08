import { BarsService } from './bars.service';
import { CreateBarDto } from './dto/create-bar.dto';
import { UpdateBarDto } from './dto/update-bar.dto';
import { ResponseBarDto } from './dto/response-bar.dto';
export declare class BarsController {
    private readonly barService;
    constructor(barService: BarsService);
    create(req: any, createBarDto: CreateBarDto): Promise<ResponseBarDto>;
    findOne(id: string): Promise<ResponseBarDto>;
    findAll(): Promise<ResponseBarDto[]>;
    update(id: string, updateBarDto: UpdateBarDto): Promise<ResponseBarDto>;
    remove(id: string): Promise<void>;
    removeAllBars(): Promise<void>;
}
