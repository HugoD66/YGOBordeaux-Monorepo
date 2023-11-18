import { CreateBarDto } from "./dto/create-bar.dto";
import { UpdateBarDto } from "./dto/update-bar.dto";
export declare class BarService {
    create(createBarDto: CreateBarDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateBarDto: UpdateBarDto): string;
    remove(id: number): string;
}
