import { ResponseGeoDto } from '../../geo/dto/response-geo.dto';
import { ResponsePictureListDto } from '../../picture-list/dto/response-picture-list.dto';
import { UserResponseDto } from '../../users/dto/user-response.dto';
import { ParticularityEnum } from '../entities/types/particularity.enum';
import { User } from '../../users/entities/user.entity';
export declare class CreateBarDto {
  name: string;
  adresse: string;
  description?: string;
  createdAt: Date;
  telephone: string;
  note?: number;
  pictureList?: ResponsePictureListDto;
  geo?: ResponseGeoDto;
  createdBy: UserResponseDto | User;
  particularities?: ParticularityEnum[];
}
