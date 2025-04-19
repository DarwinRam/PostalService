// Package.ts (Class definitions)

class Package {
    constructor(
        public senderName: string,
        public receiverName: string,
        public senderAddress: string,
        public receiverAddress: string,
        public weight: number,
        public shippingMethod: string,
        public costPerUnitWeight: number,
        public trackingNumber: number,
        public status: string = 'Shipped'
    ) {}

    calculateCost(): number {
        return this.weight * this.costPerUnitWeight;
    }

    printLabel(): void {
        console.log(`----------------------------------------`);
        console.log(`Tracking Number: ${this.trackingNumber}`);
        console.log(`Sender: ${this.senderName} | Address: ${this.senderAddress}`);
        console.log(`Receiver: ${this.receiverName} | Address: ${this.receiverAddress}`);
        console.log(`Weight: ${this.weight} kg`);
        console.log(`Shipping Method: ${this.shippingMethod}`);
        console.log(`Status: ${this.status}`);
        console.log(`Cost: $${this.calculateCost()}`);
        console.log(`----------------------------------------`);
    }

    updateStatus(newStatus: string): void {
        this.status = newStatus;
        console.log(`Package ${this.trackingNumber} status updated to: ${this.status}`);
    }
}

class OneDayPackage extends Package {
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

    calculateCost(): number {
        return super.calculateCost() + this.flatFee;
    }
}

class TwoDayPackage extends Package {
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

    calculateCost(): number {
        return super.calculateCost() + this.flatFee;
    }
}

export { Package, OneDayPackage, TwoDayPackage };
