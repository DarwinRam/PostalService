"use strict";
// TwoDayPackageHeader.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Package_1 = __importDefault(require("../models/Package"));
class TwoDayPackageHeader extends Package_1.default {
    constructor(senderName, receiverName, senderAddress, receiverAddress, weight, costPerUnitWeight, trackingNumber, flatFee) {
        super(senderName, receiverName, senderAddress, receiverAddress, weight, 'Two-Day', costPerUnitWeight, trackingNumber);
        this.flatFee = flatFee;
    }
}
exports.default = TwoDayPackageHeader;
