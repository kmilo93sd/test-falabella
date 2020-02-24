import { Product } from '../../entities/product/product';
import { ProductsRepository } from './ProductsRepository';
import { ProductFactory } from '../../entities/product/productFactory';

export class MockProductsRepository implements ProductsRepository {
  private productFactory: ProductFactory;

  constructor() {
    this.productFactory = new ProductFactory();
  }

  byType(productType: string): Product {
    return this.productFactory.build(
      products.find(product => product.type === productType),
    );
  }

  all(): Product[] {
    return products.map(product => this.productFactory.build(product));
  }
}

const products = [
  {
    type: 'full_cobertura',
    name: 'Full cobertura',
    sellIn: 10,
    price: 20,
  },
  {
    type: 'mega_cobertura',
    name: 'Mega cobertura',
    sellIn: 10,
    price: 180,
  },
  {
    type: 'full_cobertura_super_duper',
    name: 'Full cobertura Super duper',
    sellIn: 25,
    price: 30,
  },
  {
    type: 'super_avance',
    name: 'Super avance',
    sellIn: 15,
    price: 25,
  },
];
