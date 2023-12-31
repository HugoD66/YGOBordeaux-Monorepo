import {IsNumber, IsOptional} from "class-validator";

export class CreateGeoDto {
  @IsOptional()
  x: string;
  @IsOptional()
  y: string;
}
