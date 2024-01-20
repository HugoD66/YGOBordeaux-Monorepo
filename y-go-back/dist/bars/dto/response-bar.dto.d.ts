import { ResponsePictureListDto } from '../../picture-list/dto/response-picture-list.dto';
import { ResponseGeoDto } from '../../geo/dto/response-geo.dto';
import { UserResponseDto } from '../../users/dto/user-response.dto';
import { ParticularityEnum } from '../entities/types/particularity.enum';
export declare class ResponseBarDto {
    id?: string;
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
    particularities?: ParticularityEnum[];
}
