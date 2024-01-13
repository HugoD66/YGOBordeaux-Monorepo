import { ResponseGeoDto } from '../../geo/dto/response-geo.dto';
import { ResponsePictureListDto } from '../../picture-list/dto/response-picture-list.dto';
import { UserResponseDto } from '../../users/dto/user-response.dto';
export declare class CreateBarDto {
  name: string;
  adresse: string;
  description?: string;
  createdAt: Date;
  telephone: string;
  note?: number;
  pictureList?: ResponsePictureListDto;
  geo?: ResponseGeoDto;
  createdBy: UserResponseDto;
}
