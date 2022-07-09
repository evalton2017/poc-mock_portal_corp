import "reflect-metadata";
import {createConnection} from "typeorm";
import { AppLogger } from "./appLogger";
import 'dotenv/config';

const config = {
  host: process.env.HOST,
  db: process.env.DB,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
};

class Database{

  createConnection(): void{
    createConnection({
      type: "postgres",
      host: config.host,
      port: 5432,
      username: config.user,
      password: config.password,
      database: config.db,
      entities: [
        `${__dirname}/../**/*.model.{ts,js}`
      ],
      synchronize: true,
      logging: false,
    }).then((_connection): void => {
      AppLogger.info("Criando/atualizando tabelas no banco")
    }).catch((error) => {
      AppLogger.error(error);
    });

  }

}

export default Database;
