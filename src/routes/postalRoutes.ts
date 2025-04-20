import { Router } from 'express';
import { addOneDayPackage, addTwoDayPackage } from '../controllers/packageController';

const router = Router();

// Define routes for adding packages
router.post('/packages/oneday', addOneDayPackage);
router.post('/packages/twoday', addTwoDayPackage);

export default router;
