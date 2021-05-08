import { Request, Response } from 'express'
import Cart from '../models/Cart';
import Checkout from '../models/Checkout'

class checkoutController {
    static async createCheckout(req: Request, res: Response) {
        const userId = (<any>req).userId;
        try {
            const cartbyId = await Cart.find({ user: userId });
            const quantityCarts = await Cart.find({ user: userId }).select("quantity");
            const totalpaymentCarts = await Cart.find({ user: userId }).select("totalprice");
            const totalOrder = quantityCarts
                .map((bill) => bill.quantity)
                .reduce((acc, bill) => bill + acc);
            const totalpayment = totalpaymentCarts
                .map((bill) => bill.totalprice)
                .reduce((acc, bill) => bill + acc);
            const createCheckout = await Checkout.create({
                cart: cartbyId,
                totalorder: totalOrder,
                totalpayment: totalpayment,
                user: userId,
            });
            res.status(201).json({ msg: "checkouts has successfully", data: createCheckout });
        }
        catch {
            throw { name: "Fail_Checkout" };
        }
    }
}

export default checkoutController;