import mongoose, { Mongoose } from 'mongoose'
const Schema = mongoose.Schema

interface IProduct {
    name: string,
    price: number,
    imagePath: string,
    stock: number,
    description: string,
    categories: string[]
}

interface ProductDocument extends mongoose.Document{
    name: string,
    price: number,
    imagePath: string,
    stock: number,
    description: string,
    categories: string[]
}

interface ProductModelInterface extends mongoose.Model<ProductDocument>{
    build(attr: IProduct): ProductDocument
}

const productSchema = new Schema ({
    name: {
        type: String,
    },
    price: {
        type: Number,
    },
    imagePath: {
        type: String,
    },
    stock: {
        type: Number,
    },
    description: {
        type: String,
    },
    categories: {type: mongoose.Types.ObjectId, ref: 'Categories'}
})

const Product = mongoose.model<ProductDocument, ProductModelInterface>('Product', productSchema)
export default Product