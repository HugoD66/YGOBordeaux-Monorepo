import { ResponsePictureListDto } from "../../picture-list/dto/response-picture-list.dto";
import { ResponseGeoDto } from "../../geo/dto/response-geo.dto";
export declare class ResponseBarDto {
    id: string;
    name: string;
    adresse: string;
    description?: string;
    telephone: string;
    note?: number;
    pictureList?: ResponsePictureListDto;
    geo?: ResponseGeoDto;
}
