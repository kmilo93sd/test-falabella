import { Request } from 'express';
import { ProductsRepository } from '../../repositories/products/ProductsRepository';
import {
  BadRequestException,
  Controller,
  Get,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { MockProductsRepository } from '../../repositories/products/MockProductsRepository';
import { SellProductService } from '../../services/sellProductService';

@Controller('sales')
export class SalesController {
  private readonly productsRepository: ProductsRepository;

  constructor(productsRepository: MockProductsRepository) {
    this.productsRepository = productsRepository;
  }

  @Post()
  sellProduct(@Req() request: Request) {
    const { productId } = request.body;

    if (!productId) {
      throw new BadRequestException("Missing parameter 'productId'.");
    }

    const sellProductService = new SellProductService(this.productsRepository);

    const response = sellProductService.execute(productId);

    return { message: 'ok' };
  }

  @Get()
  getSoldProducts() {
    return { data: [] };
  }
}
