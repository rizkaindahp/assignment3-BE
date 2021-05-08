"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user_controller"));
class userRoute {
    constructor() {
        this.router = express_1.Router();
        this.updateUser();
        this.detailUser();
    }
    updateUser() {
        this.router.put('/userupdate/:userId', user_controller_1.default.updateUser);
    }
    detailUser() {
        this.router.get('/detailuser/:userId', user_controller_1.default.detailUser);
    }
}
exports.default = new userRoute().router;
