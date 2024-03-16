import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { UserRoleEnum } from './types/user.roles.enum';
import { Bar } from '../../bars/entities/bar.entity';
import { UserBarRating } from '../../user-bar-rating/entities/user-bar-rating.entity';
import { Post } from '../../post/entities/post.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn(`uuid`)
  public id!: string;

  @Column({ length: 500, unique: true })
  public name!: string;

  @Column()
  public email!: string;

  @Exclude()
  @Column()
  public password!: string;

  @Column({ nullable: true })
  public picture: string | null;

  @Column({
    type: `enum`,
    enum: UserRoleEnum,
    default: UserRoleEnum.Utilisateur,
  })
  public role: UserRoleEnum;

  @Column({ nullable: true })
  public phone!: string | null;

  @OneToMany(() => Bar, (bar) => bar.createdBy)
  public createBars?: Bar[] | null;

  @OneToMany(() => UserBarRating, (userBarRating) => userBarRating.user)
  userBarRatings?: UserBarRating[] | null;

  @OneToMany(() => Post, (post) => post.user)
  public posts?: Post[] | null;

  @CreateDateColumn()
  public createdAt!: Date;

  @UpdateDateColumn()
  public updatedAt?: Date | null;

  /*
  @Column()
  public adress: string

  @Column()
  public phone: string
   */
}
