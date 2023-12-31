import { ApiProperty } from '@nestjs/swagger';
import {ResponsePictureListDto} from "../../picture-list/dto/response-picture-list.dto";
import {ResponseGeoDto} from "../../geo/dto/response-geo.dto";

export class ResponseBarDto {
  @ApiProperty({ type: String })
  id: string;
  @ApiProperty({ type: String })
  name: string;
  @ApiProperty({ type: String })
  adresse: string;
  description?: string;
  telephone: string;
  note?: number;
  pictureList?: ResponsePictureListDto;
  geo?: ResponseGeoDto;
}
