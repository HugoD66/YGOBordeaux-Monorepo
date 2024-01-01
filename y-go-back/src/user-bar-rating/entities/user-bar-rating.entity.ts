import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "../../users/entities/user.entity";
import { Bar } from "../../bars/entities/bar.entity";
import {IsInt, Max, Min} from "class-validator";

@Entity()
export class UserBarRating {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsInt()
  @Min(0)
  @Max(5)
  rating: number;

  @ManyToOne(() => User, user => user.userBarRatings)
  user: User;

  @ManyToOne(() => Bar, bar => bar.userBarRatings)
  bar: Bar;
}
