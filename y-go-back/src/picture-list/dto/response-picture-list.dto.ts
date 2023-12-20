import { ApiProperty } from '@nestjs/swagger';

export class ResponsePictureListDto {
  @ApiProperty({ type: String })
  id: string;
  pictureOne?: string;
  pictureTwo?: string;
  pictureThree?: string;
}
