import { ConflictException, Injectable } from '@nestjs/common';
import { Card } from './entities/card.entity';
import { Status } from './enums/status.enum';

@Injectable()
export class CardRespository {
  private cardList: Card[];

  constructor() {
    this.cardList = [];
  }

  findAll() {
    return this.cardList;
  }

  insert(card: Card): Card {
    const entity = this.findById(card.id);

    if (entity) throw new ConflictException('Card already exists');

    this.cardList.push(card);

    return card;
  }

  inactive(id: string) {
    this.cardList.flatMap((value) => {
      if (value.id === id) value.status = Status.CANCELLED;
    });
  }

  findById(id: string): Card | undefined {
    return this.cardList.find((todo) => todo.id === id);
  }

  update(id: string, todo: Partial<Card>) {
    const entity = this.findById(id);

    if (!entity) {
      throw new Error('Card not found');
    }

    Object.assign(entity, todo);
    entity.updatedAt = new Date();
    return entity;
  }
}
