import { Planos } from "../infra/typeorm/entities/Planos";

interface IPlanosRepository {
  list(): Promise<Planos[]>;
  findByName(nome: string): Promise<Planos>;
}

export { IPlanosRepository };
