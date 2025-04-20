// DerivedPackages.ts

import OneDayPackageHeader from '../interface/OneDayPackageHeader';
import TwoDayPackageHeader from '../interface/TwoDayPackageHeader';

class OneDayPackage extends OneDayPackageHeader {
  calculateCost(): number {
    return this.weight * this.costPerUnitWeight + this.flatFee;
  }
}

class TwoDayPackage extends TwoDayPackageHeader {
  calculateCost(): number {
    return this.weight * this.costPerUnitWeight + this.flatFee;
  }
}

export { OneDayPackage, TwoDayPackage };
