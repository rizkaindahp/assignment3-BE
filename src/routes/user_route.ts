import { Router, Request, Response } from 'express'
import IRoutes from './IRoutes'
import userController from '../controllers/user_controller'
import authJwt from '../middlewares/authJwt'

class userRoute {
   router: Router
   constructor() {
      this.router = Router()
      this.updateUser()
      this.detailUser()
   }

   public updateUser(): void {
      this.router.put('/userupdate/:userId', userController.updateUser)
   }

   public detailUser(): void{
      this.router.get('/detailuser/:userId', userController.detailUser)
   }
}

export default new userRoute().router