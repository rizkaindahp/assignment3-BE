import { Router , Request, Response } from 'express'
import authRoute from './auth_route'
import IRoutes from './IRoutes'
import userRoute from './user_route'
import productRoute from './product_route'
import categoriesRoute from './categories_router'
import cartRoute from './cart_route'
import checkoutRoute from './checkout_route'
import errorHandler from '../middlewares/errorHandler'
import authJwt from '../middlewares/authJwt'

class Routes {
    router: Router
    constructor(){
        this.router = Router()
        this.routes()
        this.auth()
        this.product()
        this.categories()
        this.authJwt()
        this.user()
        this.cart()
        this.checkout()
        this.errorHandler()
    }

    public routes():void {
        this.router.get('/', (req: Request, res: Response)=>{
            res.status(200).json({ message: "Home" });
        })
    }

    public auth():void {
        this.router.use('/auth', authRoute)
    }

    public product():void {
        this.router.use('/product', productRoute)
    }

    public categories():void {
        this.router.use('/categories', categoriesRoute)
    }

    public authJwt():void{
        this.router.use(authJwt.authentication)
    }

    public user():void {
        this.router.use('/user', userRoute)
    }

    public cart():void {
        this.router.use('/cart', cartRoute)
    }

    public checkout():void {
        this.router.use('/checkout', checkoutRoute)
    }

    public errorHandler():void {
        this.router.use(errorHandler)
    }
}

export default new Routes().router