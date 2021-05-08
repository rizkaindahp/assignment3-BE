import mongoose, { Mongoose } from 'mongoose'
const Schema = mongoose.Schema

interface ICheckout {
    totalpayment: number,
    totalorder: number,
    product: string[],
    user: string[],
    cart: string
}

interface CheckoutDocument extends mongoose.Document{
    totalpayment: number,
    totalorder: number,
    product: string[],
    user: string[],
    cart: string
}

interface CheckoutModelInterface extends mongoose.Model<CheckoutDocument>{
    build(attr: ICheckout): CheckoutDocument
}

const checkoutSchema = new Schema({
    totalpayment: {
        type: Number,
    },
    totalorder: {
        type: Number,
    },
    product: {
        type: mongoose.Types.ObjectId,
        ref: 'Product'
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    cart: [{
        type: mongoose.Types.ObjectId,
        ref: 'Cart'
    }]
},
{ timestamps: { createdAt: "created_at", updatedAt: "updated_ad" } })

const Checkout = mongoose.model<CheckoutDocument, CheckoutModelInterface>('Checkout', checkoutSchema)
export default Checkout