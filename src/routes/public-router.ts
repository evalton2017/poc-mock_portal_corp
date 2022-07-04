import LoginController from "../modules/controllers/login-controller";
import * as express from "express";
import LoginService from "../modules/services/loginService";


const publicRouter = express.Router();
const service = new LoginService();
const loginController = new LoginController();

//ROTA PARA PUBLIC
//publicRouter.route('/iniciar').get(loginController.iniciar);


export default publicRouter;
