import {IsNotEmpty, IsOptional, MinLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {Column} from "typeorm";

export class CreateBarDto {
  @MinLength(2)
  @IsNotEmpty()
  @ApiProperty({ example: 'Nom bars', description: 'Nom du bars' })
  public name: string;

  @IsNotEmpty()
  @ApiProperty({ example: 'Adresse', description: 'Adresse du bars' })
  public adresse: string;

  /*
  @IsOptional()
  public price?: number
   */
}
