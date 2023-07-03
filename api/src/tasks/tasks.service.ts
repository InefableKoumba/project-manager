import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Response } from 'express';
import { Project } from 'src/projects/entities/project.entity';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
    @InjectRepository(Task)
    private projectRepository: Repository<Project>,
  ){}

  async create(res: Response, createTaskDto: CreateTaskDto) {
    const {title,description, projectId} = createTaskDto;
    const task = new Task()
    task.title = title;
    task.description = description;

    try {
      const  project  = await this.projectRepository.findOne(projectId);
      task.project = project; 
      const createdTask = await this.taskRepository.save(task);
      project.tasks.push(task);
      this.projectRepository.save(project);
      return res.status(201).json(createdTask)
    } catch (error) {
      return res.status(500).json({errors: error})
    }
  }

  async findAll(res: Response) {
    try {
      const tasks = await this.taskRepository.find()
      return res.status(200).json(tasks)
    } catch (error) {
      return res.status(500).json({errors: error})
    }
  }

  async findOne(res: Response, id: string) {
    try {
      const task = await this.taskRepository.findOne(id)
      if(!task) return res.status(404).json({error: "Task not found"})
      return res.status(200).json(task)
    } catch (error) {
      return res.status(500).json({errors: error})
    }
  }

  async update(res: Response, id: string, updateTaskDto: UpdateTaskDto) {
    const {title,description} = updateTaskDto;
    try {
      const task = await this.taskRepository.findOne(id)
      if(!task) return res.status(404).json({error: "Task not found"})
      await this.taskRepository.update(id,{title,description})
      return res.status(200).json(task)
    } catch (error) {
      return res.status(500).json({errors: error})
    }
  }

  async remove(res: Response, id: string) {
    try {
      const task = await this.taskRepository.findOne(id);
      if(!task) return res.status(404).json({error: "Task not found"})
      await this.taskRepository.remove(task);
      return res.status(200).json(task);
   
    } catch (error) {
      return res.status(500).json({errors: error})
    }
    
  }
}
