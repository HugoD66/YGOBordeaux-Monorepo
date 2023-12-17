import {Exclude} from "class-transformer";

export class UserResponseDto {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  picture?: string | null;
  role: string;
}
