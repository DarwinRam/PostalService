"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const packageController_1 = require("../controllers/packageController");
const router = (0, express_1.Router)();
// Define routes for adding packages
router.post('/packages/oneday', packageController_1.addOneDayPackage);
router.post('/packages/twoday', packageController_1.addTwoDayPackage);
exports.default = router;
