import { ICreateHistoryDTO } from "../dto/ICreateHistoryDTO";
import { History } from "../infra/typeorm/entities/History";

interface IHistoryRepository {
  create(data: ICreateHistoryDTO): Promise<void>;
  list(): Promise<History[]>;
  // findByDDDs(origem: string, destino: string): Promise<History>;
}

export { IHistoryRepository };
