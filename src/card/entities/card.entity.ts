import { CardResponse } from '../dto/card-response';
import { Status } from '../enums/status.enum';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Card {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  subTitle?: string;

  @Column()
  description: string;

  @Column({ type: 'enum', enum: Status })
  status: Status;

  @UpdateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true })
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
