import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm"
import { PictureList } from "../../picture-list/entities/picture-list.entity";

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

  @OneToOne(() => PictureList, pictureList => pictureList.bar, {
    cascade: ['insert', 'update', 'remove'],
    onDelete: 'CASCADE',
    //nullable: true
  })
  @JoinColumn()
  public pictureList: PictureList | null;
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

