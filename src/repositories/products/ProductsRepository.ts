export interface ProductsRepository {
  byId(productId: string);
  all();
}
