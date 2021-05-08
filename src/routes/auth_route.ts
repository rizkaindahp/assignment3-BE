import { Router, Request, Response } from 'express'
import authController from '../controllers/auth_controller'


class AuthRoute {
    router: Router
    constructor(){
        this.router = Router()
        this.register()
        this.login()
    }

    public register(): void {
        this.router.post('/register', authController.register)
    }

    public login(): void {
        this.router.post('/login', authController.login)
    }
}

export default new AuthRoute().router