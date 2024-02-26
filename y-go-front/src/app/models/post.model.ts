import { UserModel } from './user.model';
import { BarModel } from './bar.model';

export class PostModel {
  id?: string | undefined;
  message: string | undefined;
  createdAt?: Date | undefined;
  user?: UserModel | undefined;
  userId?: string | undefined;
  bar?: BarModel | undefined;
  barId?: string | undefined;
}
