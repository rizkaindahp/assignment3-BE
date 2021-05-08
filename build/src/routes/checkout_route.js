"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const checkout_controller_1 = __importDefault(require("../controllers/checkout_controller"));
class CheckoutRoute {
    constructor() {
        this.router = express_1.Router();
        this.createCheckout();
    }
    createCheckout() {
        this.router.post('/checkoutproduct', checkout_controller_1.default.createCheckout);
    }
}
exports.default = new CheckoutRoute().router;
