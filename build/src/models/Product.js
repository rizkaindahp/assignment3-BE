"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const productSchema = new Schema({
    name: {
        type: String,
    },
    price: {
        type: Number,
    },
    imagePath: {
        type: String,
    },
    stock: {
        type: Number,
    },
    description: {
        type: String,
    },
    categories: { type: mongoose_1.default.Types.ObjectId, ref: 'Categories' }
});
const Product = mongoose_1.default.model('Product', productSchema);
exports.default = Product;
