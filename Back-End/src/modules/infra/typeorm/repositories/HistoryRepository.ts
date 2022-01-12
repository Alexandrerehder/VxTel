import { ICreateHistoryDTO } from "@modules/dto/ICreateHistoryDTO";
import { IHistoryRepository } from "@modules/repositories/IHistoryRepository";
import { getRepository, Repository } from "typeorm";

import { History } from "../entities/History";

class HistoryRepository implements IHistoryRepository {
  private repository: Repository<History>;

  constructor() {
    this.repository = getRepository(History);
  }
  async create({
    origem,
    destino,
    plano,
    minutos,
    semPlano,
    comPlano,
  }: ICreateHistoryDTO): Promise<void> {
    const history = this.repository.create({
      origem,
      destino,
      plano,
      minutos,
      semPlano,
      comPlano,
    });

    await this.repository.save(history);
  }

  async list(): Promise<History[]> {
    const list = await this.repository.find();
    // {cache: { id: "listHistory", milliseconds: 1000000 },}
    return list;
  }
}

export { HistoryRepository };
