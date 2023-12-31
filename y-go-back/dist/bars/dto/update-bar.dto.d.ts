import { CreateBarDto } from "./create-bar.dto";
import { UserResponseDto } from "../../users/dto/user-response.dto";
declare const UpdateBarDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateBarDto>>;
export declare class UpdateBarDto extends UpdateBarDto_base {
    name: string;
    adresse: string;
    description?: string;
    telephone: string;
    createdBy?: UserResponseDto;
    updatedAt: Date;
    picture: string;
}
export {};
