"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = __importDefault(require("../controllers/product_controller"));
// const storage = multer.diskStorage({
//     destination: function (req: Request, file: any, cb: any) {
//       cb(null, "./uploadsProduct/");
//     },
//     filename: function (req: Request, file: any, cb: any) {
//       cb(null, Date.now() + file.originalname);
//     },
// });
// const fileFilter = (req: Request, file: any, cb: any) => {
//     if (
//       file.mimetype === 'productimage/jpg' ||
//       file.mimetype === 'productimage/jpeg'||
//       file.mimetype === 'productimage/png'
//     ) {
//       cb(null, true);
//     } else {
//       cb(null, false);
//       console.log("format must jpg, jpeg, png");
//     }
// };
// const uploads = multer({
//     storage: storage,
//     limits: {
//       fileSize: 1024 * 1024 * 5,
//     },
//     fileFilter: fileFilter,
// });
// const uploads = multer({
//   limits: {
//       fileSize: 1000000
//   },
//   fileFilter(req, file, cb) {
//       if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
//           return cb(new Error('Please upload an image'))
//           cb(null, true);
//       } else {
//         cb(null, false);
//        console.log('format must jpg,jpeg,png')
//       }
//   }
// })
class ProductRoute {
    constructor() {
        this.router = express_1.Router();
        this.createProduct();
        this.getAllProduct();
        this.getProductId();
    }
    createProduct() {
        this.router.post('/create-product', product_controller_1.default.createProduct);
    }
    getAllProduct() {
        this.router.get('/all-product', product_controller_1.default.getAllProduct);
    }
    getProductId() {
        this.router.get('/:productId', product_controller_1.default.getProductId);
    }
}
exports.default = new ProductRoute().router;
