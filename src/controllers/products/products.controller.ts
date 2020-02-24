import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { ProductsRepository } from '../../repositories/products/ProductsRepository';
import { MockProductsRepository } from '../../repositories/products/MockProductsRepository';
import { EvaluateProductsService } from '../../services/evaluateProductsService';

@Controller('products')
export class ProductsController {
  private readonly productsRepository: ProductsRepository;

  constructor(productsRepository: MockProductsRepository) {
    this.productsRepository = productsRepository;
  }

  @Get()
  getAvailableProducts() {
    return this.productsRepository.all();
  }

  @Get('/evaluate/:days')
  evaluateProductsByDays(@Param() params) {
    const days = params.days;

    if (isNaN(days)) {
      throw new HttpException(
        'Invalid url param, valid number was expected as a param.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const evaluateProductsService = new EvaluateProductsService(
      this.productsRepository,
    );

    const evaluation = evaluateProductsService.execute(days);

    return { data: evaluation };
  }
}
