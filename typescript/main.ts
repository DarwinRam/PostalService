// main.ts (Main file to run the package system)
import { PackageManager } from './PackageManager.js';
import { OneDayPackage, TwoDayPackage } from './Package.js';

const manager = new PackageManager();

function addOneDayPackage(sender: string, receiver: string, senderAddr: string, receiverAddr: string, weight: number, costPerUnit: number, trackingNum: number, flatFee: number) {
    manager.addPackage(new OneDayPackage(sender, receiver, senderAddr, receiverAddr, weight, costPerUnit, trackingNum, flatFee));
}

function addTwoDayPackage(sender: string, receiver: string, senderAddr: string, receiverAddr: string, weight: number, costPerUnit: number, trackingNum: number, flatFee: number) {
    manager.addPackage(new TwoDayPackage(sender, receiver, senderAddr, receiverAddr, weight, costPerUnit, trackingNum, flatFee));
}

function listAllPackages() {
    manager.listPackages();
}

function searchPackageByTrackingNumber(trackingNumber: number) {
    manager.searchPackage(trackingNumber);
}

function updatePackageStatus(trackingNumber: number, newStatus: string) {
    manager.updatePackageStatus(trackingNumber, newStatus);
}

function deletePackage(trackingNumber: number) {
    manager.removePackage(trackingNumber);
}

// Example usage:
addOneDayPackage("Alice", "Bob", "123 Main St", "456 Elm St", 2, 5, 101, 10);
addTwoDayPackage("Carol", "Dave", "789 Oak St", "321 Pine St", 3, 4, 102, 8);

console.log("Listing all packages:");
listAllPackages();

console.log("Searching for package with tracking number 101:");
searchPackageByTrackingNumber(101);

console.log("Updating status of package 101 to 'Delivered':");
updatePackageStatus(101, 'Delivered');

console.log("Deleting package with tracking number 102:");
deletePackage(102);

console.log("Listing all packages after deletion:");
listAllPackages();
