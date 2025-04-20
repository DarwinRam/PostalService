import { Request, Response } from 'express';
import { OneDayPackage } from '../models/DerivedPackages';
import { TwoDayPackage } from '../models/DerivedPackages';
import pool from '../db/db'; // your PostgreSQL pool

// Add One-Day Package
export const addOneDayPackage = async (req: Request, res: Response) => {
  const {
    senderName,
    receiverName,
    senderAddress,
    receiverAddress,
    weight,
    costPerUnitWeight,
    flatFee
  } = req.body;

  const trackingNumber = Math.floor(Math.random() * 100000);

  const oneDayPackage = new OneDayPackage(
    senderName,
    receiverName,
    senderAddress,
    receiverAddress,
    weight,
    costPerUnitWeight,
    trackingNumber,
    flatFee
  );

  try {
    const query = `
      INSERT INTO Packages (
        sender_name, receiver_name, sender_address, receiver_address,
        weight, cost_per_unit, shipping_method, flat_fee, tracking_number, status,
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    `;

    await pool.query(query, [
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
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding One-Day package." });
  }
};

// Add Two-Day Package
export const addTwoDayPackage = async (req: Request, res: Response) => {
  const {
    senderName,
    receiverName,
    senderAddress,
    receiverAddress,
    weight,
    costPerUnitWeight,
    flatFee
  } = req.body;

  const trackingNumber = Math.floor(Math.random() * 100000);

  const twoDayPackage = new TwoDayPackage(
    senderName,
    receiverName,
    senderAddress,
    receiverAddress,
    weight,
    costPerUnitWeight,
    trackingNumber,
    flatFee
  );

  try {
    const query = `
      INSERT INTO Packages (
        sender_name, receiver_name, sender_address, receiver_address,
        weight, cost_per_unit, shipping_method, flat_fee, tracking_number, status
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    `;

    await pool.query(query, [
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
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding Two-Day package." });
  }
};
