import { Price } from './price';
export class SimplePrice extends Price {
  constructor(value: number) {
    super(value);
  }

  //Add some extra rules here
  protected validate(value) {}
}
