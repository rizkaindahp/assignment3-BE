import { Request, Response } from 'express'
import Categories  from '../models/Categories'

class categoriesController {
    static async createCategories(req: Request, res: Response) {
        try {
            const newCategories = await Categories.create({
                nameCategory: req.body.nameCategory,
            });
            res.status(201).json({
                success: true,
                msg: "Create a Successful Category",
                data: newCategories,
            });
        } catch {
            throw { name: "Fail_Created" };
        }
    }

    static async getAllCategories(req: Request, res: Response) {
        try {
            const allCategories = await Categories.find();
            res.status(200).json({success: true, msg: "This is Categories", data: allCategories });
        }
        catch {
            throw { name: "Not_Found" };
        }
    }

    static async getCategoriesId(req: Request, res: Response) {
        try {
            const findCategories = await Categories.findById(req.params.categoriesId);
            res.status(200).json({ success: true, msg: "This is Categories", data: findCategories });
        }
        catch {
            throw { name: "Not_Found" };
        }
    }
}

export default categoriesController;