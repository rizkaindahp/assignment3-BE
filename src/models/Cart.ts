import mongoose, { Mongoose } from 'mongoose'
const Schema = mongoose.Schema

interface ICart {
    quantity: number,
    totalprice: number,
    product: string[],
    user: string[],
}

interface CartDocument extends mongoose.Document{
    quantity: number,
    totalprice: number,
    product: string[],
    user: string[],
}

interface CartModelInterface extends mongoose.Model<CartDocument>{
    build(attr: ICart): CartDocument
}

const cartSchema = new Schema({
    quantity: {
        type: Number,
    },
    totalprice: {
        type: Number,
    },
    product: {
        type: mongoose.Types.ObjectId, 
        ref: 'Product'
    },
    user: {
        type: mongoose.Types.ObjectId, 
        ref: 'Order'
    }
},{ timestamps: { createdAt: "created_at", updatedAt: "updated_ad" } }
)

const Cart = mongoose.model<CartDocument, CartModelInterface>('Cart', cartSchema)
export default Cart