import { Price } from './price';

export class Product {
  private id: string;
  private name: string;
  private sellIn: number;
  private price: Price;
  private salesStartDate: string;

  constructor(
    id: string,
    name: string,
    sellIn: number,
    price: Price,
    salesStartDate: string,
  ) {
    this.id = id;
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
    this.salesStartDate = salesStartDate;
  }

  getCurrentPrice() {}
}
