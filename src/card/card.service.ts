import { Injectable, NotFoundException } from '@nestjs/common';
import { CardRequest } from './dto/card-request';
import { CardUpdate } from './dto/card-update.dto';
import { CardRespository } from './card.respository';
import { Card } from './entities/card.entity';
import { CardResponse } from './dto/card-response';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult } from 'typeorm/browser';
import { Status } from './enums/status.enum';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card)
    private readonly repository: Repository<Card>,
  ) {}

  async create(payload: CardRequest) {
    const savedCard: Card = await this.repository.save(payload);

    const card = Object.setPrototypeOf(savedCard, Card.prototype);

    return card.toResponse();
  }

  async findAll(): Promise<CardResponse[]> {
    const cardList = await this.repository.find();
    return cardList.map((card) => card.toResponse());
  }

  async findOne(id: string): Promise<CardResponse> {
    const card: Card | null = await this.repository.findOneBy({ id });

    if (!card) throw new NotFoundException('Card not found');

    return card.toResponse();
  }

  async update(id: string, payload: CardUpdate): Promise<CardResponse> {
    await this.repository.update(id, payload);
    return await this.findOne(id);
  }

  async remove(id: string): Promise<Card> {
    const cardEntity: Card | null = await this.repository.findOneBy({ id });
    if (cardEntity === null) throw new NotFoundException('card not found');
    cardEntity.status = Status.CANCELLED;
    await this.repository.save(cardEntity);
    return cardEntity;
  }
}
