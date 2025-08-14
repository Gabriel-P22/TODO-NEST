import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Status } from '../enums/status.enum';
import { Card } from '../entities/card.entity';
import { Transform } from 'class-transformer';

export class CardRequest {
  id: string;

  @IsNotEmpty()
  title: string;

  subTitle?: string;

  @IsNotEmpty()
  description: string;

  @IsEnum(Status)
  status: Status;

  dueDate?: Date;

  toModel(): Card {
    return new Card(
      this.id,
      this.title,
      this.description,
      this.status,
      new Date(),
      new Date(),
      this.subTitle,
      this.dueDate,
    );
  }
}
