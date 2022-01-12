import { DDDs } from "../infra/typeorm/entities/DDDs";

interface IDDDsRepository {
  list(): Promise<DDDs[]>;
  findByDDDs(origem: string, destino: string): Promise<DDDs>;
}

export { IDDDsRepository };
