import { PartialType } from '@nestjs/mapped-types';
import { CardRequest } from './card-request';

export class CardUpdate extends PartialType(CardRequest) {
  updatedAt: Date;
}
