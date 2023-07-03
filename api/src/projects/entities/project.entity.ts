import { Task } from "src/tasks/entities/task.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Project {
    
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({nullable: false,type:"character"})
    title: string;

    @Column({nullable: true, type:"text"})
    description: string;

    @Column({nullable: false,type:"character", default: Date.now()})
    createdAt: string;

    @OneToMany(type=> Task, task => task.project)
    tasks : Task[];


}
