import { Router, Request, Response } from 'express'
import checkoutController from '../controllers/checkout_controller'

class CheckoutRoute {
    router: Router
    constructor(){
        this.router = Router()
        this.createCheckout()
    }

    public createCheckout(): void {
        this.router.post('/checkoutproduct', checkoutController.createCheckout)
    }
}

export default new CheckoutRoute().router