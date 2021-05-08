import { NextFunction, Request, Response } from 'express'
import Cart  from '../models/Cart'
import Product from '../models/Product';

class cartController {
    static async addToCart(req: Request, res: Response, next: NextFunction) {
        const user_id = await (<any>req).userId;
        const product_id = req.params.product;
        const cartIsExsist: any = await Cart.count({ user: user_id, product: product_id })
        const product: any = await Product.findById(product_id);
        const priceTag = product.price;
        const quantity: any = await req.body.quantity;
        const totalprice: any = priceTag * quantity;
        let createCart: any;
        let increment: any;
        let sendData: any;

        try {
            if (cartIsExsist == 1) {
                const existedCart: any = await Cart.findOne({ user: user_id, product: product_id })
                const cart_id = existedCart.id
                increment = await Cart.findByIdAndUpdate(cart_id, { $inc: { quantity: quantity, totalprice: totalprice } }, { new: true })
                sendData = increment
            } else {
                createCart = await Cart.create({
                    user: user_id,
                    product: product_id,
                    quantity: quantity,
                    totalprice: totalprice
                })
                sendData = createCart
            }
            res.status(201).json({ success: true, message: "Success add to cart!", data: sendData })
        }
        catch (err) {
            next(err)
        }
    }

    static async deleteCart(req: Request, res: Response, next: NextFunction) {
        try {
            await Cart.findByIdAndDelete(req.params.cartId);
            res.status(200).json({ message: "Delete Cart Success"});
        }
        catch (err){
            next(err)
        }
    }
}

export default cartController;