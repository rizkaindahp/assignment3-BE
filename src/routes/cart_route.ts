import { Router, Request, Response } from 'express'
import cartController from '../controllers/cart_controller'

class CartRoute {
    router: Router
    constructor(){
        this.router = Router()
        this.addToCart()
        this.deleteCart()
    }

    public addToCart(): void {
        this.router.post('/addtocart/:product', cartController.addToCart)
    }

    public deleteCart(): void {
        this.router.delete('/deletecart/:cartId', cartController.deleteCart)
    }
}

export default new CartRoute().router