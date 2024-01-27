import { UserResponseDto } from '../../users/dto/user-response.dto';
import { ResponseBarDto } from '../../bars/dto/response-bar.dto';
import { ApiProperty } from '@nestjs/swagger';

export class ResponseRateDto {
  rate!: number;
  ratedAt!: Date;
  updatedAt!: Date | null;
  @ApiProperty()
  user: UserResponseDto;

  @ApiProperty()
  bar!: ResponseBarDto;
}
