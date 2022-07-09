import 'reflect-metadata';
import 'dotenv/config';
import express, {Request, Response, NextFunction} from 'express';
import 'express-async-errors';
import { json, urlencoded } from 'body-parser';
import { AppLogger } from './util/appLogger';
import compression from 'compression';
import * as cors from 'cors';
import loginRouter from './routes/login-router';
import AppError from './shared/errors/AppError';
import Database from './util/db';
import UserService from './modules/services/userService';
import { User } from './modules/model/user.model';


class StartUp {
  public app: express.Application;
  private _db: Database;

  constructor() {
    this.app = express();
    this._db = new Database();
    this._db.createConnection();
    this.configureMiddleware();
    this.iniciaCarga();
    this.routes();
    this.app.use((error: Error, request: Request, response: Response, next: NextFunction)=>{
      if(error instanceof AppError){
        return response.status(error.statusCode).json({
          status: 'error',
          message: error.message
        })
      }
      return response.status(500).json({
        status: 'error',
        message: 'Internal server error'
      })
    });

  }

  routes() {
    this.app.use("/api", loginRouter);
  }

  private configureMiddleware() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(json({ limit: '50mb' }));
    this.app.use(compression());
    this.app.use(urlencoded({ limit: '50mb', extended: true }));
    this.enableCors();
    AppLogger.configureLogger();
  }

  enableCors() {
    const options: cors.CorsOptions = {
      methods: "GET,OPTIONS,PUT,POST,DELETE",
      origin: "*",
    }
    this.app.use(cors.default(options));
  }

  iniciaCarga(){
    setTimeout(() => {
      this.iniciaCargaAdmin();
    }, 1000);
  }

  async iniciaCargaAdmin(){
    const service = new UserService();
    console.log("INICIANDO CARGA DE DADOS")
    const retorno = await service.existeUser();
    if(retorno == false){
        const user: User = new User();
        user.cpf= '000022223333';
        user.email = 'duke@gmail.com';
        user.password = '123456';
        user.nome = 'administrador'
        service.cadastrarUser(user);
    }
  }



}

export default new StartUp();
