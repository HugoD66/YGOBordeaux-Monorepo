import { ApiProperty } from '@nestjs/swagger';

export class ResponseBarDto {
  @ApiProperty({ type: String })
  id: string;
  @ApiProperty({ type: String })
  name: string;
  @ApiProperty({ type: String })
  adresse: string;
  /*
  @ApiProperty({ type: Number })
  price?: number
   */
}
