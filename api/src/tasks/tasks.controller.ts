import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Response } from 'express';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Res() res: Response, @Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(res, createTaskDto);
  }

  @Get()
  findAll(@Res() res: Response,) {
    return this.tasksService.findAll(res);
  }

  @Get(':id')
  findOne(@Res() res: Response,@Param('id') id: string) {
    return this.tasksService.findOne(res, id);
  }

  @Patch(':id')
  update(@Res() res: Response, @Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(res, id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Res() res: Response, @Param('id') id: string) {
    return this.tasksService.remove(res, id);
  }
}
