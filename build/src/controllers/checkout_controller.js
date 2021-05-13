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
const Checkout_1 = __importDefault(require("../models/Checkout"));
class checkoutController {
    static createCheckout(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = req.userId;
            try {
                const cartbyId = yield Cart_1.default.find({ user: userId });
                const quantityCarts = yield Cart_1.default.find({ user: userId }).select("quantity");
                const totalpaymentCarts = yield Cart_1.default.find({ user: userId }).select("totalprice");
                const totalOrder = quantityCarts
                    .map((bill) => bill.quantity)
                    .reduce((acc, bill) => bill + acc);
                const totalpayment = totalpaymentCarts
                    .map((bill) => bill.totalprice)
                    .reduce((acc, bill) => bill + acc);
                const createCheckout = yield Checkout_1.default.create({
                    cart: cartbyId,
                    totalorder: totalOrder,
                    totalpayment: totalpayment,
                    user: userId,
                });
                res.status(201).json({ success: true, msg: "checkouts has successfully", data: createCheckout });
            }
            catch (_a) {
                throw { name: "Fail_Checkout" };
            }
        });
    }
}
exports.default = checkoutController;
