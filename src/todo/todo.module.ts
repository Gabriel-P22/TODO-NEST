import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { TodoRespository } from './todo.respository';

@Module({
  controllers: [TodoController],
  providers: [TodoService, TodoRespository],
})
export class TodoModule {}
