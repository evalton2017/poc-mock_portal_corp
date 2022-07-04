import jwt from 'jsonwebtoken';
import httpStatus from 'http-status';
import {NextFunction, Request, Response} from 'express';


import * as secrets from '../../constantes/secrets';
import AuthException from '../../exception/AuthException';
import AppError from '../../../shared/errors/AppError';

interface TokenPayload{
    user: {
        id: number;
        nome: string;
        email: string;
        cpf: string;
      }
}

export default (req: Request, res: Response, next: NextFunction) => {
    try{
        const authorization = req.headers.authorization;
        if(!authorization){
            throw new AuthException(httpStatus.UNAUTHORIZED, "AcessToken não informado.")
        }

        const [, token]  = authorization.split(' ');

        const decodeToken = jwt.verify(token, secrets.API_SECRET);
   
        const userDecoder = decodeToken as TokenPayload;
        
        req.user = userDecoder.user;
    
        return next();
    }catch(err: any){
        throw new AppError('Invalid Token')
    }
  
   
  };