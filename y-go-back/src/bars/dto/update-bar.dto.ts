import { PartialType } from "@nestjs/mapped-types"
import { CreateBarDto } from "./create-bar.dto"
import {IsOptional, IsString} from "class-validator";

export class UpdateBarDto extends PartialType(CreateBarDto) {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  adresse: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  telephone: string;

  //@IsOptional()
  //@IsString()
  //picture: string;
  /*
  @IsOptional()
  note?: number;
   */

}
