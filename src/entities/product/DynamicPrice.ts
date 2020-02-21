import { Price } from './price';
import { DomainException } from '../../exceptions/DomainException';

export class DynamicPrice extends Price {
  constructor(value: number) {
    super(value);
  }

  protected validate(value) {
    if (value > 100) {
      throw new DomainException('Price cant be greater than 100.');
    }

    return value;
  }
}
