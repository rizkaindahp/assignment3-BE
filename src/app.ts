import express, { Application } from 'express';
import Routes from './routes/index'
import MongoDB from './config/db'
import dotenv from 'dotenv'

class App {
  public app: Application
  constructor(){
    this.app = express()
    this.thirdparty()
    this.router()
    dotenv.config()
  }

  protected thirdparty(): void{
    this.app.use(express.urlencoded({ extended: true}))
    MongoDB()
  }

  protected router(): void {
    this.app.use(Routes)
  }
}

export default new App().app