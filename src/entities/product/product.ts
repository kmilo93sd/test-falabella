export class Product {
  private id: string;
  private name: string;
  private sellIn: number;
  private price: number;
  private salesStartDate: string;

  constructor(
    id: string,
    name: string,
    sellIn: number,
    price: number,
    salesStartDate: string,
  ) {
    this.id = id;
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
    this.salesStartDate = salesStartDate;
  }

  getCurrentPrice() {

  }
}
