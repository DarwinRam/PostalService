// OneDayPackageHeader.ts

import Package from './Package';

abstract class OneDayPackageHeader extends Package {
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
    super(senderName, receiverName, senderAddress, receiverAddress, weight, 'One-Day', costPerUnitWeight, trackingNumber);
  }

  abstract calculateCost(): number;
}

export default OneDayPackageHeader;
