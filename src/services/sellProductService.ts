import { ProductsRepository } from '../repositories/products/ProductsRepository';
import { NotFoundException } from '@nestjs/common';

export class SellProductService {
  private productsRepository: ProductsRepository;

  constructor(productsRepository: ProductsRepository) {
    this.productsRepository = productsRepository;
  }

  execute(productId: string) {
    const foundProduct = this.productsRepository.byId(productId);

    if (!foundProduct) {
      throw new NotFoundException(
        'Product of id ' + productId + ' was not found.',
      );
    }


  }
}
