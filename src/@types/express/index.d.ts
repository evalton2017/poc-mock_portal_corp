declare namespace Express {
  interface Request {
      user?: {
        id: number;
        nome: string;
        email: string;
        cpf: string;
      };
    }
}
