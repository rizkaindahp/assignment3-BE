"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const cartSchema = new Schema({
    quantity: {
        type: Number,
    },
    totalprice: {
        type: Number,
    },
    product: {
        type: mongoose_1.default.Types.ObjectId,
        ref: 'Product'
    },
    user: {
        type: mongoose_1.default.Types.ObjectId,
        ref: 'Order'
    }
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_ad" } });
const Cart = mongoose_1.default.model('Cart', cartSchema);
exports.default = Cart;
