import { BarService } from "./bar.service";
import { CreateBarDto } from "./dto/create-bar.dto";
import { UpdateBarDto } from "./dto/update-bar.dto";
export declare class BarController {
    private readonly barService;
    constructor(barService: BarService);
    create(createBarDto: CreateBarDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBarDto: UpdateBarDto): string;
    remove(id: string): string;
}
