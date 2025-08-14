import { IsNotEmpty } from 'class-validator';
import { Status } from '../enums/status.enum';

export class CardResponse {
  constructor(
    id: string,
    title: string,
    description: string,
    status: Status,
    createdAt: Date,
    dueDate?: Date,
    subTitle?: string,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.createdAt = createdAt;
    this.dueDate = dueDate;
    this.subTitle = subTitle;
  }

  id: string;
  title: string;
  subTitle?: string;
  description: string;
  status: Status;
  dueDate?: Date;
  createdAt: Date;
}
