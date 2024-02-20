// import { OmitType } from '@nestjs/mapped-types';
// import { TodoEntity } from '../entities/todo.entity';

export class CreateTodoDto {
  id: string;
  label: string;
  done: boolean;
}
