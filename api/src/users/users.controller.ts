import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {Response} from "express"


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Res() res: Response, @Body() createUserDto: CreateUserDto) {
    const {email,password,username} = createUserDto;

    return this.usersService.create(res,{email,password,username});
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Res() res: Response, @Param('id') id: string) {
    return this.usersService.findOne(res,id);
  }

  @Patch(':id')
  update(
    @Res() res: Response, 
    @Param('id') id: string, 
    @Body() updateUserDto: UpdateUserDto) 
  {
    return this.usersService.update(res,id, updateUserDto);
  }

  @Delete(':id')
  remove(@Res() res: Response, @Param('id') id: string) {
    return this.usersService.remove(res, id);
  }
}
