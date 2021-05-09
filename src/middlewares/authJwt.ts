import { NextFunction, Response, Request} from 'express';
import { User } from '../models/User'
import * as jwt from 'jsonwebtoken';
class authJwt {
   static authentication(req: Request, res: Response, next: NextFunction) {
      const accessToken:any = req.headers.accesstoken
      if (!accessToken) {
         // return res.status(401).json({msg: 'Missing access token..', success: false})
         throw {name: 'Missing_Token'}
      }

      const secretKey: string = (process.env.SECRET_KEY as string)
      jwt.verify(accessToken, secretKey, (err:any, decoded:any) => {
         if (err) {
            throw { name: "Forbidden_Access" };
         }
         // id dari token dan dimasukan kedalam req
         (<any>req).userId = decoded.id
         next()
      })
   }
}

export default authJwt