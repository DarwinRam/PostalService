// TwoDayPackageHeader.ts

import Package from './Package';

abstract class TwoDayPackageHeader extends Package {
  constructor(
    senderName: string,
    receiverName: string,
    senderAddress: string,
    receiverAddress: string,
    weight: number,
    costPerUnitWeight: number,
    trackingNumber: number,
    public flatFee: number
  ) {
    super(senderName, receiverName, senderAddress, receiverAddress, weight, 'Two-Day', costPerUnitWeight, trackingNumber);
  }

  abstract calculateCost(): number;
}

export default TwoDayPackageHeader;
