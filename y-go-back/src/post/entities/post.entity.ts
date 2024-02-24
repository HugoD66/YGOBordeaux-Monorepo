import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "../../users/entities/user.entity"
import { Bar } from "../../bars/entities/bar.entity"
import { Length } from "class-validator"

@Entity()
export class Post {
  @PrimaryGeneratedColumn(`uuid`)
  public id!: string

  @Column()
  @Length(4, 280)
  public message!: string

  @Column({ type: `timestamp`, default: () => `CURRENT_TIMESTAMP` })
  public createdAt!: Date

  @ManyToOne(() => User, (user) => user.posts, { onDelete: `CASCADE` })
  public user!: User

  @ManyToOne(() => Bar, (bar) => bar.posts, { onDelete: `CASCADE` })
  public bar!: Bar
}
