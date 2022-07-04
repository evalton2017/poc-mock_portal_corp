import startUp from './startUp';
import { AppLogger } from './util/appLogger';
import fs = require('fs');

const dir = './uploads';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

const dir_log = './logs';
if (!fs.existsSync(dir_log)){
    fs.mkdirSync(dir_log);
}

const port = process.env.PORT || '3030';

startUp.app.listen(port, function () {
  AppLogger.info(`servidor executando na porta ${port}`);
});


