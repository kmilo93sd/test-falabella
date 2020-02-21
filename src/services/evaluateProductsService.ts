import { ProductsRepository } from '../repositories/products/ProductsRepository';

export class EvaluateProductsService {
  private productsRepository: ProductsRepository;

  constructor(productsRepository: ProductsRepository) {
    this.productsRepository = productsRepository;
  }

  execute(days: number) {
    const products = this.productsRepository.all();

    return products.map(product => {
      return product.evaluatePerDays(days);
    });
  }
}
