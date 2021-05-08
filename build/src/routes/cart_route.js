"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cart_controller_1 = __importDefault(require("../controllers/cart_controller"));
class CartRoute {
    constructor() {
        this.router = express_1.Router();
        this.addToCart();
        this.deleteCart();
    }
    addToCart() {
        this.router.post('/addtocart/:product', cart_controller_1.default.addToCart);
    }
    deleteCart() {
        this.router.delete('/deletecart/:cartId', cart_controller_1.default.deleteCart);
    }
}
exports.default = new CartRoute().router;
