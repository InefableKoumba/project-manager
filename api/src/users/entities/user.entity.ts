import { Entity, Column,PrimaryGeneratedColumn, PrimaryColumn, OneToOne, OneToMany } from "typeorm";


@Entity()
export class User {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({nullable: false,unique: true,length : 10})
  username: string;

  @Column({nullable: false,unique: true, length : 50})
  email: string;

  @Column({nullable: false, length : 100})
  password: string;

  @Column({ default: false, nullable:false })
  isAdmin: boolean;

  
}