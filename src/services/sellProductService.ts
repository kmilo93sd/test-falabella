import { ProductsRepository } from '../repositories/products/ProductsRepository';
import { NotFoundException } from '@nestjs/common';

export class SellProductService {
  private productsRepository: ProductsRepository;

  constructor(productsRepository: ProductsRepository) {
    this.productsRepository = productsRepository;
  }

  execute(productType: string) {
    const foundProduct = this.productsRepository.byType(productType);

    if (!foundProduct) {
      throw new NotFoundException(
        'Product of type ' + productType + ' was not found.',
      );
    }
  }
}
