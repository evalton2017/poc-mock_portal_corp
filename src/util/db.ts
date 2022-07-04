import "reflect-metadata";
import {createConnection} from "typeorm";
import { AppLogger } from "./appLogger";


//CONFIGURAÇÕES LOCAL
const DB_LOCAL = 'auth';
const USERNAME_LOCAL= 'auth';
const PASSWORD_LOCAL='auth1234';
const HOST_LOCAL='localhost';

class Database{

  createConnection(){
    createConnection({
      type: "postgres",
      host: HOST_LOCAL,
      port: 5432,
      username: USERNAME_LOCAL,
      password: PASSWORD_LOCAL,
      database: DB_LOCAL,
      entities: [
        `${__dirname}/../**/*.model.{ts,js}`
      ],
      synchronize: true,
      logging: false
    }).then(connection => {
      AppLogger.info("Criando/atualizando tabelas no banco")
    }).catch((error) => {
      AppLogger.error(error);
    });

  }

}

export default Database;
