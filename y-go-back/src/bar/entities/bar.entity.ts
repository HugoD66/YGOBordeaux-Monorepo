import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Bar {
  @PrimaryGeneratedColumn(`uuid`)
  public id!: string

  @Column()
  public name!: string

  @Column()
  public adresse!: string

  @Column()
  public neighborhood!: string // quartier

  @Column()
  public price?: number

  @Column()
  public nibble?: boolean

  @Column()
  public happyHour?: boolean

  @Column()
  public averageAge?: number

  @Column()
  public drinks?: string[] // Faire une enum ?

  @Column()
  public openTime: number // date?

  @Column()
  public closeTime: number // Date ?

  @Column()
  public card: string

  @Column()
  public pictures: string[]

  @Column()
  public notes: number
}
