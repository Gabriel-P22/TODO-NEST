import { Injectable } from '@nestjs/common';
import { CardRequest } from './dto/card-request';
import { CardUpdate } from './dto/card-update.dto';
import { CardRespository } from './card.respository';
import { Card } from './entities/card.entity';
import { CardResponse } from './dto/card-response';

@Injectable()
export class CardService {
  constructor(private readonly repository: CardRespository) {}

  create(payload: CardRequest) {
    return this.repository.insert(payload.toModel()).toResponse();
  }

  findAll(): CardResponse[] {
    return this.repository.findAll().map((card) => card.toResponse());
  }

  findOne(id: string): Card | undefined {
    return this.repository.findById(id);
  }

  update(id: string, payload: CardUpdate) {
    return this.repository.update(id, payload).toResponse();
  }

  remove(id: string) {
    return this.repository.inactive(id);
  }
}
