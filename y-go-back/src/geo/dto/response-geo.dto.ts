import { ApiProperty } from '@nestjs/swagger';
import { PictureList } from '../../picture-list/entities/picture-list.entity';
import { ResponsePictureListDto } from '../../picture-list/dto/response-picture-list.dto';

export class ResponseGeoDto {
  @ApiProperty({ type: String })
  id: string;
  @ApiProperty({ type: Number })
  x: string;
  @ApiProperty({ type: Number })
  y: string;
}
