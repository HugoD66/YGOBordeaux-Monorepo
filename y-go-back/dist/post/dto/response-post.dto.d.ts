import { User } from '../../users/entities/user.entity';
import { Bar } from '../../bars/entities/bar.entity';
export declare class ResponsePostDto {
  id: string;
  message: string;
  createdAt: Date;
  updatedAt?: Date;
  user: User;
  bar: Bar;
}
