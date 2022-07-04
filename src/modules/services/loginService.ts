import AppError from '../../shared/errors/AppError';
import { getRepository } from 'typeorm';
import { UserLogado } from '../model/userLogado.model';

class LoginService {
 /* constructor(private auth: Auth) {}

  async createdUser(pessoa: Pessoa, callback: any): Promise<any> {
    try {
      await this.auth.SigUpWithWmailAndPassword(
        pessoa.email = pessoa.email?.toLocaleLowerCase(),
        pessoa.password,
        (response: any) => {
          if (response.statusCode != 400) {
            this.cadastrarPessoa(pessoa);
            callback(response);
          } else {
            throw new AppError('Email invalido ou com cadastro ativo.');
          }
        }
      );
    } catch (error) {
      callback(error);
    }
  }*/

 
}

export default LoginService;
