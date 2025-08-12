import { Status } from '../enums/status.enum';

export class CreateTodoDto {
  id: string;
  title: string;
  subTitle?: string;
  description: string;
  status: Status;
  dueDate?: Date;
}
