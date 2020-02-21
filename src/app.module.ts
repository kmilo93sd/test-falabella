import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products/products.controller';
import { MockProductsRepository } from './repositories/products/MockProductsRepository';
import { SalesController } from './controllers/sales/sales.controller';

@Module({
  imports: [],
  controllers: [ProductsController, SalesController],
  providers: [MockProductsRepository],
})
export class AppModule {}
