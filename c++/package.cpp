// Package.cpp (Implementation File)
#include "Package.h"
using namespace std;

Package::Package(std::string sender, std::string receiver, std::string senderAddr, std::string receiverAddr, 
    double wt, std::string method, double costPerUnit, int trackNum)
: senderName(sender), receiverName(receiver), senderAddress(senderAddr), receiverAddress(receiverAddr),
weight(wt), shippingMethod(method), costPerUnitWeight(costPerUnit), status("Shipped"), trackingNumber(trackNum) {}

double Package::calculateCost() const {
return weight * costPerUnitWeight;
}

void Package::printLabel() const {
std::cout << "----------------------------------------\n"
<< "Tracking Number: " << trackingNumber << "\n"
 << "Sender: " << senderName << " | Address: " << senderAddress << "\n"
 << "Receiver: " << receiverName << " | Address: " << receiverAddress << "\n"
 << "Weight: " << weight << "kg\n"
 << "Shipping Method: " << shippingMethod << "\n"
 << "Status: " << status << "\n"
 << "Cost: $" << calculateCost() << "\n"
 << "----------------------------------------\n";
}

void Package::updateStatus(std::string newStatus) {
status = newStatus;
std::cout << "Package " << trackingNumber << " status updated to: " << status << "\n";
}

int Package::getTrackingNumber() const {
return trackingNumber;
}


//-----------------------------------------------------------------------------------------------------------------------




OneDayPackage::OneDayPackage(std::string sender, std::string receiver, std::string senderAddr, std::string receiverAddr, 
                double wt, double costPerUnit, int trackNum, double fee)
: Package(sender, receiver, senderAddr, receiverAddr, wt, "One-Day", costPerUnit, trackNum), flatFee(fee) {}

double OneDayPackage::calculateCost() const {
return (weight * costPerUnitWeight) + flatFee;
}

void OneDayPackage::printLabel() const {
Package::printLabel();
std::cout << "One-Day Shipping Flat Fee: $" << flatFee << "\n";
}



//---------------------------------------------------------------------------------------------------------------------



TwoDayPackage::TwoDayPackage(std::string sender, std::string receiver, std::string senderAddr, std::string receiverAddr, 
                double wt, double costPerUnit, int trackNum, double fee)
: Package(sender, receiver, senderAddr, receiverAddr, wt, "Two-Day", costPerUnit, trackNum), flatFee(fee) {}

double TwoDayPackage::calculateCost() const {
return (weight * costPerUnitWeight) + flatFee;
}

void TwoDayPackage::printLabel() const {
Package::printLabel();
std::cout << "Two-Day Shipping Flat Fee: $" << flatFee << "\n";
}

//-----------------------------------------------------------------------------------------------------------------

void PackageManager::addPackage(Package* package) {
packages.push_back(package);
}

void PackageManager::listPackages() const {
for (const auto& package : packages) {
package->printLabel();
}
}

void PackageManager::searchPackage(int trackingNumber) const {
for (const auto& package : packages) {
if (package->getTrackingNumber() == trackingNumber) {
package->printLabel();
return;
}
}
std::cout << "Package with tracking number " << trackingNumber << " not found.\n";
}

PackageManager::~PackageManager() {
for (auto package : packages) {
delete package;
}
}

bool PackageManager::updatePackageStatus(int trackingNumber, const std::string& newStatus) {
    // Iterate through the packages and search for the package with the specified tracking number
    for (auto& package : packages) {
        if (package->getTrackingNumber() == trackingNumber) {
            // If package found, update the status and return true
            package->updateStatus(newStatus);
            return true;
        }
    }
    
    // If no package found after iterating through all, return false
    std::cout << "Package with tracking number " << trackingNumber << " not found.\n";
    return false;
}

bool PackageManager::removePackage(int trackingNumber) {
    for (auto it = packages.begin(); it != packages.end(); ++it) {
        if ((*it)->getTrackingNumber() == trackingNumber) {
            // Package found, delete it
            delete *it;
            packages.erase(it);  // Remove from vector
            std::cout << "Package with tracking number " << trackingNumber << " has been deleted.\n";
            return true;
        }
    }
    std::cout << "Package with tracking number " << trackingNumber << " not found. Deletion failed.\n";
    return false;
}



