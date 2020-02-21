import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { MockProductsRepository } from '../../repositories/products/MockProductsRepository';
import { ProductsRepository } from '../../repositories/products/ProductsRepository';
import { Request } from 'express';

@Controller('sales')
export class SalesController {
  private productsRepository: ProductsRepository;

  constructor(productsRepository: MockProductsRepository) {
    this.productsRepository = productsRepository;
  }

  @Post()
  sellProduct(@Req() request: Request) {
    return { message: 'ok' };
  }

  @Get()
  getSoldProducts() {
    return { data: [] };
  }

  @Get('/evaluate/:days')
  evaluateProductsByDays(@Param() params) {
    return { data: [] };
  }
}
