import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Bar } from '../../bars/entities/bar.entity';
import { IsInt, Max, Min } from 'class-validator';

@Entity()
export class UserBarRating {
  @PrimaryGeneratedColumn(`uuid`)
  id: string;

  @Column()
  @IsInt()
  @Min(0)
  @Max(5)
  rate: number;

  @CreateDateColumn()
  public ratedAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

  @ManyToOne(() => User, (user) => user.userBarRatings)
  user: User;

  @ManyToOne(() => Bar, (bar) => bar.userBarRatings)
  bar: Bar;
}
