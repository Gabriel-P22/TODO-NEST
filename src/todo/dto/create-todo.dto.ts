import { IsNotEmpty, IsString } from 'class-validator';
import { Status } from '../enums/status.enum';

export class CreateTodoDto {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  title: string;
  subTitle?: string;
  description: string;
  status: Status;
  dueDate?: Date;
}
