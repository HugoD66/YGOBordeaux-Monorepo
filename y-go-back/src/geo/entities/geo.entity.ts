import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Bar } from '../../bars/entities/bar.entity';

@Entity()
export class Geo {
  @PrimaryGeneratedColumn(`uuid`)
  public id!: string;

  @Column({ nullable: true })
  public x!: string;

  @Column({ nullable: true })
  public y!: string;

  @OneToOne(() => Bar, (bar) => bar.geo)
  public bar!: Bar;
}
