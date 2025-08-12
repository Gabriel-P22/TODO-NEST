import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoRespository } from './todo.respository';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(private readonly repository: TodoRespository) {}

  create(createTodoDto: CreateTodoDto) {
    return this.repository.insert(
      new Todo(
        createTodoDto.id,
        createTodoDto.title,
        createTodoDto.description,
        createTodoDto.status,
        new Date(),
        new Date(),
        createTodoDto.subTitle,
        createTodoDto.dueDate,
      ),
    );
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: string) {
    return this.repository.findById(id);
  }

  update(id: string, updateTodoDto: UpdateTodoDto) {
    return this.repository.update(id, updateTodoDto);
  }

  remove(id: string) {
    return this.repository.inactive(id);
  }
}
