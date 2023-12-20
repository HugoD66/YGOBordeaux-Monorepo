import {Column, Entity, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Bar} from "../../bars/entities/bar.entity";

@Entity()
export class PictureList {
  @PrimaryGeneratedColumn(`uuid`)
  public id!: string

  @Column()
  public pictureOne?: string;

  @Column()
  public pictureTwo?: string;

  @Column()
  public pictureThree?: string;

  @OneToOne(() => Bar, bar => bar.pictureList)
  public bar!: Bar;
}
