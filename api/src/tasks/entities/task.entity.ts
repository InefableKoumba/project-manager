import { Project } from "src/projects/entities/project.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export type TaskStatus = "TO DO" | "IN PROGRESS" | "DONE" 

@Entity()
export class Task {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({nullable: false, type:"character"})
    title: string;

    @Column({nullable: true, type:"text"})
    description: string;

    @Column({nullable: false,type:"character", default: Date.now()})
    createdAt: string;

    @Column({default: "TO DO", type:"character", nullable: false, enum:["TO DO", "IN PROGRESS", "DONE"]})
    status: TaskStatus;

    // @Column({nullable: true})
    // indexOfPriority : number;

    @ManyToOne(type => Project, project => project.tasks)
    project : Project;

}
