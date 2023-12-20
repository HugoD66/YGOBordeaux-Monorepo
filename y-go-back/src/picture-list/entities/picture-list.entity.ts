import {Column, Entity, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Bar} from "../../bars/entities/bar.entity";

@Entity()
export class PictureList {
  @PrimaryGeneratedColumn(`uuid`)
  public id!: string

  @Column({ nullable: true })
  public pictureOne?: string;

  @Column({ nullable: true })
  public pictureTwo?: string;

  @Column({ nullable: true })
  public pictureThree?: string;

  @Column({ nullable: true })
  public pictureFour?: string;

  @OneToOne(() => Bar, bar => bar.pictureList)
  public bar!: Bar;
}
