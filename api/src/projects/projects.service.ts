import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';
import { Response } from 'express';

@Injectable()
export class ProjectsService {

  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ){}

  async create(res: Response, createProjectDto: CreateProjectDto) {
    const {title,description} = createProjectDto;
    const project = new Project()
    project.title = title;
    project.description = description;

    try {
      const createdProject = await this.projectRepository.save(project);
      return res.status(201).json(createdProject)
    } catch (error) {
      return res.status(500).json({errors: error})
    }
  }

  async findAll(res: Response) {
    try {
      const projects = await this.projectRepository.find()
      return res.status(200).json(projects)
    } catch (error) {
      return res.status(500).json({errors: error})
    }
  }

  async findOne(res: Response, id: string) {
    try {
      const project = await this.projectRepository.findOne(id)
      if(!project) return res.status(404).json({error: "Project not found"})
      return res.status(200).json(project)
    } catch (error) {
      return res.status(500).json({errors: error})
    }
  }

  async update(res: Response, id: string, updateProjectDto: UpdateProjectDto) {
    const {title,description} = updateProjectDto;
    try {
      const project = await this.projectRepository.findOne(id)
      if(!project) return res.status(404).json({error: "Project not found"})
      await this.projectRepository.update(id,{title,description})
      return res.status(200).json(project)
    } catch (error) {
      return res.status(500).json({errors: error})
    }
  }

  async remove(res: Response, id: string) {
    try {
      const project = await this.projectRepository.findOne(id);
      if(!project) return res.status(404).json({error: "Project not found"})
      await this.projectRepository.remove(project);
      return res.status(200).json(project);
   
    } catch (error) {
      return res.status(500).json({errors: error})
    }
    
  }
}
