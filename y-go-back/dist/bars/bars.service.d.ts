import { CreateBarDto } from "./dto/create-bar.dto";
import { UpdateBarDto } from "./dto/update-bar.dto";
import { Repository } from "typeorm";
import { Bar } from "./entities/bar.entity";
import { ResponseBarDto } from "./dto/response-bar.dto";
export declare class BarsService {
    private barRepository;
    constructor(barRepository: Repository<Bar>);
    create(createBarDto: CreateBarDto): Promise<ResponseBarDto>;
    findOne(id: string): Promise<ResponseBarDto>;
    findAll(): Promise<ResponseBarDto[]>;
    update(id: string, updateBarDto: Partial<UpdateBarDto>): Promise<ResponseBarDto>;
    remove(id: string): Promise<void>;
}
