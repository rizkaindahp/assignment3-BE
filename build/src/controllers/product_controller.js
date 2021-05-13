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
const Product_1 = __importDefault(require("../models/Product"));
class productController {
    static createProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newProduct = yield Product_1.default.create({
                    categories: req.body.categories,
                    name: req.body.name,
                    price: req.body.price,
                    imagePath: req.body.imagePath,
                    stock: req.body.stock,
                    description: req.body.description,
                });
                res.status(201).json({
                    success: true,
                    msg: "Create Product Success",
                    data: newProduct,
                });
            }
            catch (_a) {
                throw { name: "Fail_Created" };
            }
        });
    }
    static getAllProduct(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allProduct = yield Product_1.default.find();
                res.status(200).json({ success: true, msg: "This is Products", data: allProduct });
            }
            catch (err) {
                next(err);
            }
        });
    }
    static getProductId(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const findCategory = yield Product_1.default.findById(req.params.productId);
                res.status(200).json({ success: true, msg: "This is Products", data: findCategory });
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.default = productController;
