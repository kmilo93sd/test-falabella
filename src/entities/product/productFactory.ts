import { Product } from './product';
import { SuperAvance } from './superAvance';
import { SimplePrice } from './simplePrice';
import { FullCoverage } from './fullCoverage';
import { DynamicPrice } from './dynamicPrice';
import { MegaCoverage } from './megaCoverage';
import { FullCoverageSuperDuper } from './fullCoverageSuperDuper';

export class ProductFactory {
  build({ type, name, sellIn, price }): Product {
    switch (type) {
      case 'full_cobertura':
        return this.fullCoverage(type, name, sellIn, price);
      case 'mega_cobertura':
        return this.megaCoverage(type, name, sellIn, price);
      case 'full_cobertura_super_duper':
        return this.fullCoverageSuperDuper(type, name, sellIn, price);
      case 'super_avance':
        return this.superAvance(type, name, sellIn, price);
    }
  }

  private fullCoverage(type, name, sellIn, price): FullCoverage {
    return new FullCoverage(type, name, sellIn, new DynamicPrice(price));
  }

  private megaCoverage(type, name, sellIn, price): MegaCoverage {
    return new MegaCoverage(type, name, sellIn, new SimplePrice(price));
  }

  private fullCoverageSuperDuper(
    type,
    name,
    sellIn,
    price,
  ): FullCoverageSuperDuper {
    return new FullCoverageSuperDuper(
      type,
      name,
      sellIn,
      new DynamicPrice(price),
    );
  }

  private superAvance(type, name, sellIn, price): SuperAvance {
    return new SuperAvance(type, name, sellIn, new DynamicPrice(price));
  }
}
