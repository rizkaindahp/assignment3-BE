import { User } from '../models/User'
import { Request, Response, ErrorRequestHandler, NextFunction } from 'express'
import bcrypt from 'bcrypt'

class userController{
   static async updateUser(req: Request, res: Response, next: NextFunction) {
      const idUser = req.params.userId
      const {username, fullname, address, city, province, handphone } = req.body;
      const updatedData: any = { username, fullname, address, city, province, handphone };
      for (const key in updatedData) {
         if (!updatedData[key]) {
            delete updatedData[key];
         }
      }
      try {
         const editUser = await User.findByIdAndUpdate(
            idUser,
            updatedData,
            {new: true}
         );
         if (!editUser) {
            res.status(200).json({success: false,message: "Failed!",
            });
         }
         res.status(200).json({success: true, msg: "Updated User Success", data: editUser,});
      }
      catch (err) {
         next(err);
      }
   }

   static async detailUser(req:Request, res:Response, next: NextFunction) {
      const idUser:any = req.params.userId
      try {
         const dataUser = await User.findById(idUser);
         res.status(200).json({ msg: "User Data Found", data: dataUser });
      } catch (err) {
         next(err);
      }
   }
}

export default userController