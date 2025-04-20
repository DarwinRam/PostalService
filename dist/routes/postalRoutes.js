"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const packageController_1 = require("../controllers/packageController");
const router = (0, express_1.Router)();
// Define routes for adding packages
router.post('/packages/oneday', packageController_1.addOneDayPackage);
router.post('/packages/twoday', packageController_1.addTwoDayPackage);
router.get('/packages', packageController_1.listPackages);
router.put('/packages/update', packageController_1.updatePackageStatus);
router.delete('/packages/delete', packageController_1.deletePackage);


exports.default = router;
