import { DomainException } from '../../exceptions/DomainException';

export abstract class Price {
  private readonly value: number;

  protected constructor(value: number) {
    if (value < 0) {
      throw new DomainException('Price cant be lower than 0.');
    }
    this.value = this.validate(value);
  }

  protected abstract validate(value);

  get() {
    return this.value;
  }
}
