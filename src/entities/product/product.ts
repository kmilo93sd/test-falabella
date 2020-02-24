import { Price } from './price';

export abstract class Product {
  private type: string;
  private name: string;
  private sellIn: number;
  private price: Price;

  protected constructor(
    type: string,
    name: string,
    sellIn: number,
    price: Price,
  ) {
    this.type = type;
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }

  abstract evaluatePerDays(days: number);
}
