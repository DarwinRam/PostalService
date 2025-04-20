"use strict";
// Package.ts
Object.defineProperty(exports, "__esModule", { value: true });
class Package {
    constructor(senderName, receiverName, senderAddress, receiverAddress, weight, shippingMethod, costPerUnitWeight, trackingNumber, status = 'Shipped') {
        this.senderName = senderName;
        this.receiverName = receiverName;
        this.senderAddress = senderAddress;
        this.receiverAddress = receiverAddress;
        this.weight = weight;
        this.shippingMethod = shippingMethod;
        this.costPerUnitWeight = costPerUnitWeight;
        this.trackingNumber = trackingNumber;
        this.status = status;
    }
    printLabel() {
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
    updateStatus(newStatus) {
        this.status = newStatus;
        console.log(`Package ${this.trackingNumber} status updated to: ${this.status}`);
    }
}
exports.default = Package;
