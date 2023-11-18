import {IsNotEmpty, MinLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {Column} from "typeorm";

export class CreateBarDto {
  @MinLength(2)
  @IsNotEmpty()
  @ApiProperty({ example: 'Nom bar', description: 'Nom du bar' })
  public name: string;

  @IsNotEmpty()
  @ApiProperty({ example: 'Adresse', description: 'Adresse du bar' })
  public adresse: string;

  @IsNotEmpty()
  public price?: number
}
