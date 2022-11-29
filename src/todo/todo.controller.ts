import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTodoDto } from './dto/createTodo.dto';
import { UpdateTodoDto } from './dto/updateTodo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly service: TodoService) {}

  @Get()
  async index() {
    try {
      return await this.service.findAll();
    } catch (error) {
      console.log(error);
    }
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    try {
      return await this.service.findOne(id);
    } catch (error) {
      console.log(error);
    }
  }

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    try {
      return await this.service.create(createTodoDto);
    } catch (error) {
      console.log(error);
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, updateTodoDto: UpdateTodoDto) {
    try {
      return await this.service.update(id, updateTodoDto);
    } catch (error) {
      console.log(error);
    }
  }

  @Delete()
  async delete(@Param('id') id: string) {
    try {
      return await this.service.delete(id);
    } catch (error) {
      console.log(error);
    }
  }
}
