import { Router, Request, Response } from 'express'
import categoriesController from '../controllers/categories_controller'

class CategoriesRoute {
    router: Router
    constructor(){
        this.router = Router()
        this.createCategories()
        this.getAllCategories()
        this.getCategoriesId()
    }

    public createCategories(): void {
        this.router.post('/create-categories', categoriesController.createCategories)
    }
    public getAllCategories(): void {
        this.router.get('/all-categories', categoriesController.getAllCategories)
    }
    public getCategoriesId(): void {
        this.router.get('/:categoriesId', categoriesController.getCategoriesId)
    }
}

export default new CategoriesRoute().router