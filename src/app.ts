import express, { Application } from 'express';
import Routes from './routes/index'
import MongoDB from './config/db'
import dotenv from 'dotenv'
import cors from "cors"

class App {
  public app: Application
  constructor(){
    this.app = express()
    this.thirdparty()
    this.router()
    dotenv.config()
  }

  protected thirdparty(): void{
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true}))
    MongoDB()
  }

  protected router(): void {
    this.app.use(Routes)
  }
}

export default new App().app