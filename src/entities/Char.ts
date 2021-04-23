import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";

import Class from "./Class";

@Entity()
export default class Char {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @OneToOne(() => Class)
  @JoinColumn()
  classe!: Class;
}
