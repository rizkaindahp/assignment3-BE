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
const Cart_1 = __importDefault(require("../models/Cart"));
const Product_1 = __importDefault(require("../models/Product"));
class cartController {
    static addToCart(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user_id = yield req.userId;
            const product_id = req.params.product;
            const cartIsExsist = yield Cart_1.default.count({ user: user_id, product: product_id });
            const product = yield Product_1.default.findById(product_id);
            const priceTag = product.price;
            const quantity = yield req.body.quantity;
            const totalprice = priceTag * quantity;
            let createCart;
            let increment;
            let sendData;
            try {
                if (cartIsExsist == 1) {
                    const existedCart = yield Cart_1.default.findOne({ user: user_id, product: product_id });
                    const cart_id = existedCart.id;
                    increment = yield Cart_1.default.findByIdAndUpdate(cart_id, { $inc: { quantity: quantity, totalprice: totalprice } }, { new: true });
                    sendData = increment;
                }
                else {
                    createCart = yield Cart_1.default.create({
                        user: user_id,
                        product: product_id,
                        quantity: quantity,
                        totalprice: totalprice
                    });
                    sendData = createCart;
                }
                res.status(201).json({ success: true, message: "Success add to cart!", data: sendData });
            }
            catch (err) {
                next(err);
            }
        });
    }
    static deleteCart(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Cart_1.default.findByIdAndDelete(req.params.cartId);
                res.status(200).json({ message: "Delete Cart Success" });
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.default = cartController;
