import { Product } from './product';
import { DynamicPrice } from './dynamicPrice';

export class SuperAvance extends Product {
  constructor(type: string, name: string, sellIn: number, price: DynamicPrice) {
    super(type, name, sellIn, price);
  }
  evaluatePerDays(days: number) {
    return { sellIn: 1, price: 1 };
  }
}
