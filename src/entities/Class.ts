import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Class {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;
}
