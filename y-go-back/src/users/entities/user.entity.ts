import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { Exclude } from 'class-transformer';
import { UserRoleEnum } from './types/user.roles.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  public id!: string

  @Column({ length: 500 , unique: true})
  public name!: string

  @Column()
  public email!: string

  @Exclude()
  @Column()
  public password!: string;

  @Column({ nullable: true})
  public picture: string | null;

  @Column({
    type: 'enum',
    enum: UserRoleEnum,
    default: UserRoleEnum.Utilisateur,
  })
  public role: UserRoleEnum;

  @Column({ nullable: true})
  public phone!: string | null;
  /*
  @Column()
  public adress: string

  @Column()
  public phone: string

  @Column()
  public newsletters: boolean
   */
}
