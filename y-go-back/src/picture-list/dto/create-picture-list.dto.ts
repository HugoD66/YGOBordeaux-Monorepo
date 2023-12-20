import {IsOptional} from "class-validator";

export class CreatePictureListDto {
  @IsOptional()
  public pictureOne?: string;

  @IsOptional()
  public pictureTwo?: string;

  @IsOptional()
  public pictureThree?: string;

  @IsOptional()
  public pictureFour?: string;

}
