// main.cpp (Main File)
#include "Package.h"
#include "package.cpp"

#include <iostream>

int main() {
    PackageManager manager;
    int choice;
    
    while (true) {
        std::cout << "\n1. Add Package\n2. List Packages\n3. Search Package\n4. Update Package Status\n5. Delete Package\n6. Exit\nChoose an option: ";
        std::cin >> choice;
        std::cout<<"\n";
        
        if (choice == 1) {
            std::string sender, receiver, senderAddr, receiverAddr, method;
            double weight, costPerUnit, flatFee;
            int trackingNum;
            
            std::cout << "Enter Sender Name: "; std::cin >> sender;
            std::cout << "Enter Receiver Name: "; std::cin >> receiver;
            std::cout << "Enter Sender Address: "; std::cin >> senderAddr;
            std::cout << "Enter Receiver Address: "; std::cin >> receiverAddr;
            std::cout << "Enter Weight (kg): "; std::cin >> weight;
            std::cout << "Enter Cost Per Unit Weight:$ "; std::cin >> costPerUnit;
            std::cout << "Enter Tracking Number: "; std::cin >> trackingNum;
            std::cout << "Enter Shipping Method (One-Day/Two-Day): "; std::cin >> method;
            
            if (method == "One-Day") {
                std::cout << "Enter Flat Fee:$ "; std::cin >> flatFee;
                manager.addPackage(new OneDayPackage(sender, receiver, senderAddr, receiverAddr, weight, costPerUnit, trackingNum, flatFee));
            } else if (method == "Two-Day") {
                std::cout << "Enter Flat Fee:$ "; std::cin >> flatFee;
                manager.addPackage(new TwoDayPackage(sender, receiver, senderAddr, receiverAddr, weight, costPerUnit, trackingNum, flatFee));
            } else {
                std::cout << "Invalid shipping method!\n";
            }
        } 
        else if (choice == 2) {
            manager.listPackages();
        } 
        else if (choice == 3) {
            int searchTrackingNum;
            std::cout << "Enter Tracking Number: "; std::cin >> searchTrackingNum;
            manager.searchPackage(searchTrackingNum);
        }  
        else if (choice == 4) {  // New option for updating the status
            int trackingNum;
            std::string newStatus;
            
            std::cout << "Enter Tracking Number: ";
            std::cin >> trackingNum;
            
            std::cout << "Enter New Status (Shipped, In-Transit, Delivered): ";
            std::cin >> newStatus;            
            // Validate the status input
            if (newStatus != "Shipped" && newStatus != "In-Transit" && newStatus != "Delivered") {
                std::cout << "Invalid status! Please enter one of the following: Shipped, In-Transit, Delivered.\n";
            } else {
                // Update the status if valid
                bool statusUpdated = manager.updatePackageStatus(trackingNum, newStatus);
                if (statusUpdated) {
                    std::cout << "Status updated successfully.\n";
                } else {
                    std::cout << "Failed to update status. Package not found.\n";
                }
            }
        }
        else if (choice == 5) {  // Option for deleting a package
            int trackingNum;
            std::cout << "Enter Tracking Number to Delete: ";
            std::cin >> trackingNum;
            
            bool deleted = manager.removePackage(trackingNum);
            if (!deleted) {
                std::cout << "Failed to delete package with tracking number " << trackingNum << ".\n";
            }
        }
        else if (choice == 6) {
            break;
        } 
        else {
            std::cout << "Invalid option!\n";
        }
    }
    
    return 0;
}

