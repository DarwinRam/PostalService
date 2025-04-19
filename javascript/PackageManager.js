class PackageManager {
    constructor() {
        this.packages = [];
    }
    addPackage(pkg) {
        this.packages.push(pkg);
    }
    listPackages() {
        this.packages.forEach(pkg => pkg.printLabel());
    }
    searchPackage(trackingNumber) {
        const pkg = this.packages.find(p => p.trackingNumber === trackingNumber);
        if (pkg) {
            pkg.printLabel();
        }
        else {
            console.log(`Package with tracking number ${trackingNumber} not found.`);
        }
    }
    updatePackageStatus(trackingNumber, newStatus) {
        const pkg = this.packages.find(p => p.trackingNumber === trackingNumber);
        if (pkg) {
            pkg.updateStatus(newStatus);
            return true;
        }
        console.log(`Package with tracking number ${trackingNumber} not found.`);
        return false;
    }
    removePackage(trackingNumber) {
        const index = this.packages.findIndex(p => p.trackingNumber === trackingNumber);
        if (index !== -1) {
            this.packages.splice(index, 1);
            console.log(`Package with tracking number ${trackingNumber} has been deleted.`);
            return true;
        }
        console.log(`Package with tracking number ${trackingNumber} not found. Deletion failed.`);
        return false;
    }
}
export { PackageManager };
