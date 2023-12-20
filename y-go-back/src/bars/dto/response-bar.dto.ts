import { ApiProperty } from '@nestjs/swagger';
import {PictureList} from "../../picture-list/entities/picture-list.entity";
import {ResponsePictureListDto} from "../../picture-list/dto/response-picture-list.dto";

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
}
