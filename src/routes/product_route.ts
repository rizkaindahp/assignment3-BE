import { Router, Request, Response } from 'express'
import authController from '../controllers/auth_controller'
import productController from '../controllers/product_controller'
import multer from 'multer'

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