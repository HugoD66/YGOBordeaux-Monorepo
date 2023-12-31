import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm"
import { PictureList } from "../../picture-list/entities/picture-list.entity";
import {Geo} from "../../geo/entities/geo.entity";
import {User} from "../../users/entities/user.entity";

@Entity()
export class Bar {
  @PrimaryGeneratedColumn(`uuid`)
  public id!: string

  @Column({ unique: true })
  public name!: string

  @Column({ unique: true })
  public adresse!: string

  @Column()
  public description?: string;

  @Column({unique: true})
  public telephone: string;

  @Column({ type: 'float', nullable: true })
  public note?: number;

  @CreateDateColumn()
  public createdAt!: Date;

  @UpdateDateColumn()
  public updatedAt?: Date | null;

  @OneToOne(() => PictureList, pictureList => pictureList.bar, {
    cascade: ['insert', 'update', 'remove'],
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  public pictureList: PictureList | null;

  @OneToOne(() => Geo, geo => geo.bar, {
    cascade: ['insert', 'update', 'remove'],
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  public geo: Geo | null;

  @ManyToOne(() => User, user => user.createBars)
  @JoinColumn({ name: 'createdById' })
  public createdBy!: User;
}

  /*
  @Column()
  public neighborhood?: string // quartier

  @Column()
  public price?: number

  @Column()
  public nibble?: boolean //Grignotter

  @Column()
  public happyHour?: boolean

  @Column()
  public averageAge?: number

  @Column({
    type: 'enum',
    enum: DrinkEnum,
    default: DrinkEnum.Despe,
  })
  @Column()
  drinks?: DrinkEnum // Faire une enum ?

  @Column()
  public openTime?: number // date?

  @Column()
  public closeTime?: number // Date ?

  @Column()
  public card?: string

  @Column()
  public notes?: number
   */

