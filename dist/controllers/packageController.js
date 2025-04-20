"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTwoDayPackage = exports.addOneDayPackage = void 0;
const DerivedPackages_1 = require("../models/DerivedPackages");
const DerivedPackages_2 = require("../models/DerivedPackages");
const db_1 = __importDefault(require("../db/db")); // your PostgreSQL pool
// Add One-Day Package
const addOneDayPackage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { senderName, receiverName, senderAddress, receiverAddress, weight, costPerUnitWeight, flatFee } = req.body;
    const trackingNumber = Math.floor(Math.random() * 100000);
    const oneDayPackage = new DerivedPackages_1.OneDayPackage(senderName, receiverName, senderAddress, receiverAddress, weight, costPerUnitWeight, trackingNumber, flatFee);
    try {
        const query = `
      INSERT INTO Packages (
        sender_name, receiver_name, sender_address, receiver_address,
        weight, cost_per_unit, shipping_method, flat_fee, tracking_number, status
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    `;
        yield db_1.default.query(query, [
            oneDayPackage.senderName,
            oneDayPackage.receiverName,
            oneDayPackage.senderAddress,
            oneDayPackage.receiverAddress,
            oneDayPackage.weight,
            oneDayPackage.costPerUnitWeight,
            oneDayPackage.shippingMethod,
            oneDayPackage.flatFee,
            oneDayPackage.trackingNumber,
            oneDayPackage.status,
        ]);
        res.status(200).json({ message: "One-Day package added successfully." });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error adding One-Day package." });
    }
});
exports.addOneDayPackage = addOneDayPackage;
// Add Two-Day Package
const addTwoDayPackage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { senderName, receiverName, senderAddress, receiverAddress, weight, costPerUnitWeight, flatFee } = req.body;
    const trackingNumber = Math.floor(Math.random() * 100000);
    const twoDayPackage = new DerivedPackages_2.TwoDayPackage(senderName, receiverName, senderAddress, receiverAddress, weight, costPerUnitWeight, trackingNumber, flatFee);
    try {
        const query = `
      INSERT INTO Packages (
        sender_name, receiver_name, sender_address, receiver_address,
        weight, cost_per_unit, shipping_method, flat_fee, tracking_number, status
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    `;
        yield db_1.default.query(query, [
            twoDayPackage.senderName,
            twoDayPackage.receiverName,
            twoDayPackage.senderAddress,
            twoDayPackage.receiverAddress,
            twoDayPackage.weight,
            twoDayPackage.costPerUnitWeight,
            twoDayPackage.shippingMethod,
            twoDayPackage.flatFee,
            twoDayPackage.trackingNumber,
            twoDayPackage.status,
        ]);
        res.status(200).json({ message: "Two-Day package added successfully." });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error adding Two-Day package." });
    }
});
exports.addTwoDayPackage = addTwoDayPackage;

// List all packages
const listPackages = async (_req, res) => {
    //console.log("Fetching all packages from DB...");
    try {
        const result = await db_1.default.query("SELECT * FROM Packages ORDER BY tracking_number ASC");
        //console.log("Packages fetched:", result.rows);
        res.status(200).json(result.rows);
    } catch (error) {
        //console.error("Error fetching packages:", error);
        res.status(500).json({ message: "Failed to retrieve packages." });
    }
};


exports.listPackages = listPackages;

const updatePackageStatus = async (req, res) => {
    const { trackingNumber, status } = req.body;
  
    try {
      const result = await db_1.default.query(  // Make sure to use db_1.default here
        `UPDATE Packages SET status = $1 WHERE tracking_number = $2`,
        [status, trackingNumber]
      );
  
      if (result.rowCount === 0) {
        return res.status(404).json({ message: "Package not found." });
      }
  
      res.status(200).json({ message: "Status updated successfully." });
    } catch (error) {
      console.error("Error updating package status:", error);
      res.status(500).json({ message: "Failed to update status." });
    }
  };

  exports.updatePackageStatus = updatePackageStatus;

  const deletePackage = async (req, res) => {
    const { trackingNumber } = req.body;
  
    try {
      const result = await db_1.default.query(  // Make sure to use db_1.default here
        `DELETE FROM Packages WHERE tracking_number = $1`,
        [trackingNumber]
      );
  
      if (result.rowCount === 0) {
        return res.status(404).json({ message: "Package not found." });
      }
  
      res.status(200).json({ message: "Package deleted successfully." });
    } catch (error) {
      console.error("Error deleting package:", error);
      res.status(500).json({ message: "Failed to delete package." });
    }
  };
    


exports.deletePackage = deletePackage;