import { Price } from './price';

export class Product {
  private id: string;
  private name: string;
  private sellIn: number;
  private price: Price;

  constructor(id: string, name: string, sellIn: number, price: Price) {
    this.id = id;
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }

  evaluatePerDays(days: number) {}
}
