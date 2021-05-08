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

    static register(req:Request, res:Response, next: NextFunction) {
      const emailValidate = EmailValidator.validate(req.body.email);
      if (emailValidate == true) {
        const newUser = new User({
          username: req.body.username,
          fullname: req.body.fullname,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password, 10),
        });
        newUser
          .save()
          .then((savedUser) => {
            res.status(201).json({
              message: "Created User Data Success",
              data: savedUser,
            });
          })
          .catch((err) => {
            next(err)
          });
      } else {
        throw { name: "Email_Fail" };
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
          });
        })
        .catch((err) => {
          next(err)
        });
    }
}

export default auth