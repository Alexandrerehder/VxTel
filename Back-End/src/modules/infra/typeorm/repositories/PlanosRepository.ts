import { IPlanosRepository } from "@modules/repositories/IPlanosRepository";
import { getRepository, Repository } from "typeorm";

import { Planos } from "../entities/Planos";

class PlanosRepository implements IPlanosRepository {
  private repository: Repository<Planos>;

  constructor() {
    this.repository = getRepository(Planos);
  }
  async list(): Promise<Planos[]> {
    const list = await this.repository.find({
      cache: { id: "listPlanos", milliseconds: 1000000 },
    });

    return list;
  }

  async findByName(nome: string): Promise<Planos> {
    const result = await this.repository
      .createQueryBuilder("p")
      .where("nome = :nome", { nome });

    const plan = await result.getOne();

    return plan;
  }
}

export { PlanosRepository };
