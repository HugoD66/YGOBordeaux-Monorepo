import { UserModel } from "./user.model"
import { BarModel } from "./bar.model"

export class RateModel {
  id: string | undefined
  rate: number | undefined
  ratedAt: Date | undefined
  updatedAt: Date | undefined
  user: UserModel | undefined
  bar: BarModel | undefined
}
