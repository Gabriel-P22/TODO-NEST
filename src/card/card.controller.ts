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
import { UpdateResult } from 'typeorm';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() payload: CardRequest): Promise<CardResponse> {
    return await this.cardService.create(payload);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<CardResponse[]> {
    return await this.cardService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') id: string): Promise<CardResponse | null> {
    return await this.cardService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  async update(
    @Param('id') id: string,
    @Body() payload: CardUpdate,
  ): Promise<CardResponse> {
    return await this.cardService.update(id, payload);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string): void {
    this.cardService.remove(id);
  }
}
