import {Exclude} from "class-transformer";

export class UserResponseDto {
  id: string;
  name: string;
  email: string;
  /*

  @Exclude()
  password: string;
   */
  picture?: string | null;
  role: string;
}
