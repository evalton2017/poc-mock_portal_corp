import { Perfil } from "./perfil.model";

export class UserLogado{
  token?:string;
  nome?: string;
  email?: string;
  password?: string;
  cpf?: string;
  perfis?: Perfil[];
}
