import { NextFunction, Request, Response } from 'express'
import Product from '../models/Product';

class productController {
    static async createProduct(req: Request, res: Response) {
        try {
            const newProduct = await Product.create({
                categories: req.body.categories,
                name: req.body.name,
                price: req.body.price,
                imagePath: req.body.imagePath,
                stock: req.body.stock,
                description: req.body.description,
            });
            res.status(201).json({
                success: true,
                msg: "Create Product Success",
                data: newProduct,
            });
        } catch {
            throw { name: "Fail_Created" };
        }
    }

    static async getAllProduct(req: Request, res: Response, next: NextFunction) {
        try {
            const allProduct = await Product.find();
            res.status(200).json({ msg: "This is Products", data: allProduct });
        }
        catch (err) {
            next(err);
        }
    }

    static async getProductId(req: Request, res: Response, next: NextFunction) {
        try {
            const findCategory = await Product.findById(req.params.productId);
            res.status(200).json({ msg: "This is Products", data: findCategory });
        }
        catch (err) {
            next(err);
        }
    }
}

export default productController;