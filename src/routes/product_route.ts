import { Router, Request, Response } from 'express'
import authController from '../controllers/auth_controller'
import productController from '../controllers/product_controller'
import multer from 'multer'

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
    router: Router
    constructor(){
        this.router = Router()
        this.createProduct()
        this.getAllProduct()
        this.getProductId()
    }

    public createProduct(): void {
        this.router.post('/create-product', productController.createProduct)
    }
    public getAllProduct(): void {
        this.router.get('/all-product', productController.getAllProduct)
    }
    public getProductId(): void {
        this.router.get('/:productId', productController.getProductId)
    }
}

export default new ProductRoute().router