"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const db_1 = __importDefault(require("./config/db"));
const dotenv_1 = __importDefault(require("dotenv"));
class App {
    constructor() {
        this.app = express_1.default();
        this.thirdparty();
        this.router();
        dotenv_1.default.config();
    }
    thirdparty() {
        this.app.use(express_1.default.urlencoded({ extended: true }));
        db_1.default();
    }
    router() {
        this.app.use(index_1.default);
    }
}
exports.default = new App().app;
