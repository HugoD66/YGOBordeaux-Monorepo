import { ApiProperty } from '@nestjs/swagger';
import {ResponsePictureListDto} from "../../picture-list/dto/response-picture-list.dto";
import {ResponseGeoDto} from "../../geo/dto/response-geo.dto";
import {UserResponseDto} from "../../users/dto/user-response.dto";

export class ResponseBarDto {
  id?: string;
  @ApiProperty({ type: String })
  name: string;
  @ApiProperty({ type: String })
  adresse: string;
  description?: string;
  telephone: string;
  note?: number;
  createdAt!: Date;
  updatedAt?: Date | null;
  pictureList?: ResponsePictureListDto;
  geo?: ResponseGeoDto;
  createdBy: UserResponseDto;
}
