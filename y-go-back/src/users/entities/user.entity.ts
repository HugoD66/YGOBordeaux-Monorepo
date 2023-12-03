import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number

  @Column({ length: 500 })
  public name: string

  @Column()
  public email: string

  @Column()
  public password: string



  /*
  @Column()
  public adress: string

  @Column()
  public email: string

  @Column()
  public phone: string

  @Column()
  public newsletters: boolean
   */
}
