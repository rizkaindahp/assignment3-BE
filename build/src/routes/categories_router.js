"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categories_controller_1 = __importDefault(require("../controllers/categories_controller"));
class CategoriesRoute {
    constructor() {
        this.router = express_1.Router();
        this.createCategories();
        this.getAllCategories();
        this.getCategoriesId();
    }
    createCategories() {
        this.router.post('/create-categories', categories_controller_1.default.createCategories);
    }
    getAllCategories() {
        this.router.get('/all-categories', categories_controller_1.default.getAllCategories);
    }
    getCategoriesId() {
        this.router.get('/:categoriesId', categories_controller_1.default.getCategoriesId);
    }
}
exports.default = new CategoriesRoute().router;
