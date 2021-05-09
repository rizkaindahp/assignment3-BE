"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = __importDefault(require("../controllers/product_controller"));
class ProductRoute {
    constructor() {
        this.router = express_1.Router();
        this.createProduct();
        this.getAllProduct();
        this.getProductId();
    }
    createProduct() {
        this.router.post('/create-product', product_controller_1.default.createProduct);
    }
    getAllProduct() {
        this.router.get('/all-product', product_controller_1.default.getAllProduct);
    }
    getProductId() {
        this.router.get('/:productId', product_controller_1.default.getProductId);
    }
}
exports.default = new ProductRoute().router;
