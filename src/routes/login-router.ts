import LoginController from "../modules/controllers/login-controller";
import {Router} from "express";
import isAuthenticated from "../modules/config/auth/checkToken";

const loginRouter = Router();
const loginController = new LoginController();

//ROTA PARA CRIAR USUARIO
loginRouter.route('/auth/cadastrar').post(loginController.cadastrar);
loginRouter.route('/auth').post(loginController.getAccessToken);
loginRouter.use(isAuthenticated);
loginRouter.post('/auth/:email', loginController.buscarUser);
loginRouter.route('/cadastrar/todos').get(loginController.buscarTodos);

export default loginRouter;


