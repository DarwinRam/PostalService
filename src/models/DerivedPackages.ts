// DerivedPackages.ts

import OneDayPackageHeader from './OneDayPackageHeader';
import TwoDayPackageHeader from './TwoDayPackageHeader';

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
