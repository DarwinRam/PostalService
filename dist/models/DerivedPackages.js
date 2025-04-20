"use strict";
// DerivedPackages.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwoDayPackage = exports.OneDayPackage = void 0;
const OneDayPackageHeader_1 = __importDefault(require("../interface/OneDayPackageHeader"));
const TwoDayPackageHeader_1 = __importDefault(require("../interface/TwoDayPackageHeader"));
class OneDayPackage extends OneDayPackageHeader_1.default {
    calculateCost() {
        return this.weight * this.costPerUnitWeight + this.flatFee;
    }
}
exports.OneDayPackage = OneDayPackage;
class TwoDayPackage extends TwoDayPackageHeader_1.default {
    calculateCost() {
        return this.weight * this.costPerUnitWeight + this.flatFee;
    }
}
exports.TwoDayPackage = TwoDayPackage;
