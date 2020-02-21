import { Controller, Get } from '@nestjs/common';
import { ProductsRepository } from '../../repositories/products/ProductsRepository';
import { MockProductsRepository } from '../../repositories/products/MockProductsRepository';

@Controller('products')
export class ProductsController {
  private productsRepository: ProductsRepository;

  constructor(productsRepository: MockProductsRepository) {
    this.productsRepository = productsRepository;
  }

  @Get()
  getAvailableProducts() {
    return this.productsRepository.all();
  }
}
