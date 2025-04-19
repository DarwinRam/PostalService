// Package.h (Header File)
#ifndef PACKAGE_H
#define PACKAGE_H

#include <iostream>
#include <string>
#include <vector>

class Package {
protected:
    std::string senderName;
    std::string receiverName;
    std::string senderAddress;
    std::string receiverAddress;
    double weight;
    std::string shippingMethod;
    double costPerUnitWeight;
    std::string status;
    int trackingNumber;
    
public:
    Package(std::string sender, std::string receiver, std::string senderAddr, std::string receiverAddr, 
            double wt, std::string method, double costPerUnit, int trackNum);
    virtual double calculateCost() const;
    virtual void printLabel() const;
    void updateStatus(std::string newStatus);
    int getTrackingNumber() const;
    virtual ~Package() {}
};

class OneDayPackage : public Package {
private:
    double flatFee;
public:
    OneDayPackage(std::string sender, std::string receiver, std::string senderAddr, std::string receiverAddr, 
                  double wt, double costPerUnit, int trackNum, double fee);
    double calculateCost() const override;
    void printLabel() const override;
};

class TwoDayPackage : public Package {
private:
    double flatFee;
public:
    TwoDayPackage(std::string sender, std::string receiver, std::string senderAddr, std::string receiverAddr, 
                  double wt, double costPerUnit, int trackNum, double fee);
    double calculateCost() const override;
    void printLabel() const override;
};

class PackageManager {
private:
    std::vector<Package*> packages;
public:
    void addPackage(Package* package);
    void listPackages() const;
    void searchPackage(int trackingNumber) const;
    bool updatePackageStatus(int trackingNumber, const std::string& newStatus); // New function for updating status
    bool removePackage(int trackingNumber);  // New function for deleting a package
    ~PackageManager();
};

#endif