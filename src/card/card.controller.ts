import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { CardService } from './card.service';
import { CardRequest } from './dto/card-request';
import { CardUpdate } from './dto/card-update.dto';
import { CardResponse } from './dto/card-response';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: CardRequest): CardResponse {
    return this.cardService.create(payload);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): CardResponse[] {
    return this.cardService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string): CardResponse | undefined {
    return this.cardService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() payload: CardUpdate): CardResponse {
    return this.cardService.update(id, payload);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string): void {
    this.cardService.remove(id);
  }
}
