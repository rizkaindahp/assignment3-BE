"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_route_1 = __importDefault(require("./auth_route"));
const user_route_1 = __importDefault(require("./user_route"));
const product_route_1 = __importDefault(require("./product_route"));
const categories_router_1 = __importDefault(require("./categories_router"));
const cart_route_1 = __importDefault(require("./cart_route"));
const checkout_route_1 = __importDefault(require("./checkout_route"));
const errorHandler_1 = __importDefault(require("../middlewares/errorHandler"));
const authJwt_1 = __importDefault(require("../middlewares/authJwt"));
class Routes {
    constructor() {
        this.router = express_1.Router();
        this.routes();
        this.auth();
        this.product();
        this.categories();
        this.authJwt();
        this.user();
        this.cart();
        this.checkout();
        this.errorHandler();
    }
    routes() {
        this.router.get('/', (req, res) => {
            res.status(200).json({ message: "Home" });
        });
    }
    auth() {
        this.router.use('/auth', auth_route_1.default);
    }
    product() {
        this.router.use('/product', product_route_1.default);
    }
    categories() {
        this.router.use('/categories', categories_router_1.default);
    }
    authJwt() {
        this.router.use(authJwt_1.default.authentication);
    }
    user() {
        this.router.use('/user', user_route_1.default);
    }
    cart() {
        this.router.use('/cart', cart_route_1.default);
    }
    checkout() {
        this.router.use('/checkout', checkout_route_1.default);
    }
    errorHandler() {
        this.router.use(errorHandler_1.default);
    }
}
exports.default = new Routes().router;
