import mongoose, { Mongoose } from 'mongoose'

const Schema = mongoose.Schema

interface IUser {
    username: string,
    fullname: string,
    email: string,
    password: string,
    address: string,
    city: string,
    province: string,
    handphone: string
}

interface UserDocument extends mongoose.Document{
    username: string,
    fullname: string,
    email: string,
    password: string,
    address: string,
    city: string,
    province: string,
    handphone: string
}

interface UserModelInterface extends mongoose.Model<UserDocument>{
    build(attr: IUser): UserDocument
}

const userSchema = new Schema({
    username: {
        type: String,
    },
    fullname: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
    },
    address: {
        type: String,
        default: "none",
    },
    city: {
        type: String,
        default: "none",
    },
    province: {
        type: String,
        default: "none",
    },
    handphone: {
        type: String,
        default: "none",
    }
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_ad" } })

const User = mongoose.model<UserDocument, UserModelInterface>('User', userSchema)
export {User}