import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Char {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @Column()
  classe!: string;
}
