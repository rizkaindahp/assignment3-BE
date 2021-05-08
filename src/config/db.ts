import mongoose from 'mongoose'
import dotenv from "dotenv"

class mongoDB {
    constructor(){
        dotenv.config();
    }
    public connectDB(): void {
        const pathURI = process.env.DB_HOST as string;
        const connectOption = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        }
        mongoose.connect(pathURI, connectOption)

        const db = mongoose.connection
        db.on('error', () => console.log('message: connection db error..'))
        db.once('open', () => console.log('message: Database Connected'))
    }
}

export default new mongoDB().connectDB