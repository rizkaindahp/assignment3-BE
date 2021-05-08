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
const Categories_1 = __importDefault(require("../models/Categories"));
class categoriesController {
    static createCategories(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newCategories = yield Categories_1.default.create({
                    nameCategory: req.body.nameCategory,
                });
                res.status(201).json({
                    success: true,
                    msg: "Create a Successful Category",
                    data: newCategories,
                });
            }
            catch (_a) {
                throw { name: "Fail_Created" };
            }
        });
    }
    static getAllCategories(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allCategories = yield Categories_1.default.find();
                res.status(200).json({ msg: "This is Categories", data: allCategories });
            }
            catch (_a) {
                throw { name: "Not_Found" };
            }
        });
    }
    static getCategoriesId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const findCategories = yield Categories_1.default.findById(req.params.categoriesId);
                res.status(200).json({ msg: "This is Categories", data: findCategories });
            }
            catch (_a) {
                throw { name: "Not_Found" };
            }
        });
    }
}
exports.default = categoriesController;
