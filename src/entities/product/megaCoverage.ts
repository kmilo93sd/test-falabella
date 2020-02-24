import { Product } from './product';
import { SimplePrice } from './simplePrice';

export class MegaCoverage extends Product {
  constructor(type: string, name: string, sellIn: number, price: SimplePrice) {
    super(type, name, sellIn, price);
  }
  evaluatePerDays(days: number) {
    return { sellIn: 1, price: 1 };
  }
}
