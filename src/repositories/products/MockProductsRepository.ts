import { ProductsRepository } from './ProductsRepository';

export class MockProductsRepository implements ProductsRepository {
  byId(productId: string) {
    return products.find(product => product.id === productId);
  }

  all() {
    return products;
  }
}

const products = [
  {
    id: 'PR0001',
    name: 'Full cobertura',
    sellIn: 10,
    price: 60000,
  },
  {
    id: 'PR0002',
    name: 'Mega cobertura',
    sellIn: 30,
    price: 50000,
  },
  {
    id: 'PR0003',
    name: 'Full cobertura Super duper',
    sellIn: 25,
    price: 80000,
  },
  {
    id: 'PR0004',
    name: 'Super avance',
    sellIn: 15,
    price: 40000,
  },
];
