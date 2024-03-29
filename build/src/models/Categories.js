"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const categoriesSchema = new Schema({
    nameCategory: {
        type: String,
    }
});
const Categories = mongoose_1.default.model('Categories', categoriesSchema);
exports.default = Categories;
