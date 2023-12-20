import { ResponsePictureListDto } from "../../picture-list/dto/response-picture-list.dto";
export declare class CreateBarDto {
    name: string;
    adresse: string;
    description?: string;
    telephone: string;
    note?: number;
    pictureList?: ResponsePictureListDto;
}
