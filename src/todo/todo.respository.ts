import { Injectable } from '@nestjs/common';
import { Todo } from './entities/todo.entity';
import { Status } from './enums/status.enum';

@Injectable()
export class TodoRespository {
  private todoList: Todo[];

  constructor() {
    this.todoList = [];
  }

  findAll() {
    return this.todoList;
  }

  insert(todo: Todo) {
    this.todoList.push(todo);
  }

  inactive(id: string) {
    this.todoList.flatMap((value) => {
      if (value.id === id) value.status = Status.CANCELLED;
    });
  }

  findById(id: string) {
    return this.todoList.find((todo) => todo.id === id);
  }

  update(id: string, todo: Partial<Todo>) {
    const entity = this.findById(id);

    if (!entity) {
      throw new Error('Todo not found');
    }

    Object.assign(entity, todo);
    entity.updatedAt = new Date();
    return entity;
  }
}
