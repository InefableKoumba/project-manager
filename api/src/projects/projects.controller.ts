import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Response } from 'express';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  create(@Res() res: Response, @Body() createProjectDto: CreateProjectDto) {
    return this.projectsService.create(res,createProjectDto);
  }

  @Get()
  findAll(@Res() res: Response) {
    return this.projectsService.findAll(res);
  }

  @Get(':id')
  findOne(@Res() res, @Param('id') id: string) {
    return this.projectsService.findOne(res, id);
  }

  @Patch(':id')
  update(@Res() res: Response, @Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectsService.update(res, id, updateProjectDto);
  }

  @Delete(':id')
  remove(@Res() res: Response,@Param('id') id: string) {
    return this.projectsService.remove(res, id);
  }
  
}
