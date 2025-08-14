import { Module } from '@nestjs/common';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { CardRespository } from './card.respository';

@Module({
  controllers: [CardController],
  providers: [CardService, CardRespository],
})
export class CardModule {}
