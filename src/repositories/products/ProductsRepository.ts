import { Product } from '../../entities/product/product';

export interface ProductsRepository {
  byType(productType: string): Product;
  all(): Product[];
}
