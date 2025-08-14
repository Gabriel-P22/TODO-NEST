import { CardResponse } from '../dto/card-response';
import { Status } from '../enums/status.enum';

export class Card {
  id: string;
  title: string;
  subTitle?: string;
  description: string;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
  dueDate?: Date;

  constructor(
    id: string,
    title: string,
    description: string,
    status: Status,
    createdAt: Date,
    updatedAt: Date,
    subTitle?: string,
    dueDate?: Date,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.subTitle = subTitle;
    this.dueDate = dueDate;
  }

  toResponse() {
    return new CardResponse(
      this.id,
      this.title,
      this.description,
      this.status,
      this.createdAt,
      this.dueDate,
      this.subTitle,
    );
  }
}
