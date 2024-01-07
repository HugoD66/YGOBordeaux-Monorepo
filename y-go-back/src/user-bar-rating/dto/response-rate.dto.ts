import { UserResponseDto } from '../../users/dto/user-response.dto';
import { ResponseBarDto } from '../../bars/dto/response-bar.dto';

export class ResponseRateDto {
  rate!: number;
  ratedAt!: Date;
  updatedAt!: Date | null;
  user!: UserResponseDto;
  bar!: ResponseBarDto;
}
