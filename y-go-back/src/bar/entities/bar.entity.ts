import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import {DrinkEnum} from "./types/drinks.enum";

@Entity()
export class Bar {
  @PrimaryGeneratedColumn(`uuid`)
  public id!: string

  @Column({ unique: true })
  public name!: string

  @Column({ unique: true })
  public adresse!: string

  @Column()
  public neighborhood!: string // quartier

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
  public openTime: number // date?

  @Column()
  public closeTime: number // Date ?

  @Column()
  public card: string

  @Column("text", { array: true, nullable: true })
  public pictures: string[]

  @Column()
  public notes: number
}
