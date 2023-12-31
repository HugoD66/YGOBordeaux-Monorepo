import { ResponsePictureListDto } from "../../picture-list/dto/response-picture-list.dto";
import { ResponseGeoDto } from "../../geo/dto/response-geo.dto";
import { UserResponseDto } from "../../users/dto/user-response.dto";
export declare class ResponseBarDto {
    name: string;
    adresse: string;
    description?: string;
    telephone: string;
    note?: number;
    createdAt: Date;
    updatedAt?: Date | null;
    pictureList?: ResponsePictureListDto;
    geo?: ResponseGeoDto;
    createdBy: UserResponseDto;
}
