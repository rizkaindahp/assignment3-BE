import { Request, Response, ErrorRequestHandler, NextFunction} from 'express'
import { User } from '../models/User'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import * as EmailValidator from 'email-validator';

class auth {
    constructor() {
      dotenv.config()
    }

    static async register(req:Request, res:Response, next: NextFunction) {
      const emailValidate = EmailValidator.validate(req.body.email);
      try{
        if (emailValidate == true) {
          const newUser = await User.create({
            username: req.body.username,
            fullname: req.body.fullname,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
          });
          newUser.save()
          res.status(201).json({msg: 'Success create your account',data: newUser})
        }
        else {
          throw { name: "Email_Fail" };
        }
      } catch (err) {
        next(err)
      }
    }

    static login(req:Request, res:Response, next: NextFunction) {
      User.findOne({ email: req.body.email })
        .then((result) => {
          if (!result) {
            return next({ name: "Email_and_Password" });
          }
          let passwordIsValid = bcrypt.compareSync(
            req.body.password,
            result.password
          );
          if (!passwordIsValid) {
            return next({ name: "Email_and_Password" });
          }
          const secretKey: string = (process.env.SECRET_KEY as string)
          let token = jwt.sign({ id: result.id }, secretKey , {expiresIn: '24hr',});
          res.status(200).json({
            message: "Login Success",
            data: result,
            AccessToken: token,
            success: true,
          });
        })
        .catch((err) => {
          next(err)
        });
    }
}

export default auth