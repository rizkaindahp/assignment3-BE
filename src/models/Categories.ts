import mongoose, { Mongoose } from 'mongoose'
const Schema = mongoose.Schema

interface ICategories {
    nameCategory: string
}

interface CategoriesDocument extends mongoose.Document{
    nameCategory: string
}

interface CategoriesModelInterface extends mongoose.Model<CategoriesDocument>{
    build(attr: ICategories): CategoriesDocument
}

const categoriesSchema = new Schema({
    nameCategory: {
        type: String,
    }
})

const Categories = mongoose.model<CategoriesDocument, CategoriesModelInterface>('Categories', categoriesSchema)
export default Categories