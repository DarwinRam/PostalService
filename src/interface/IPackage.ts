// IPackage.ts

export interface IPackage {
    senderName: string;
    receiverName: string;
    senderAddress: string;
    receiverAddress: string;
    weight: number;
    shippingMethod: string;
    costPerUnitWeight: number;
    trackingNumber: number;
    status: string;
  
    calculateCost(): number;
    printLabel(): void;
    updateStatus(newStatus: string): void;
  }
  