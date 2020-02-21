import { CacheModule, Module } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';
import { SalesController } from './controllers/sales/sales.controller';
import { ProductsController } from './controllers/products/products.controller';
import { MockProductsRepository } from './repositories/products/MockProductsRepository';

@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      host: 'localhost',
      port: 6379,
    }),
  ],
  controllers: [ProductsController, SalesController],
  providers: [MockProductsRepository],
})
export class AppModule {}
