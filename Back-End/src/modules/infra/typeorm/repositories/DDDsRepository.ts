import { IDDDsRepository } from "@modules/repositories/IDDDsRepository";
import { getRepository, Repository } from "typeorm";

import { DDDs } from "../entities/DDDs";

class DDDsRepository implements IDDDsRepository {
  private repository: Repository<DDDs>;

  constructor() {
    this.repository = getRepository(DDDs);
  }
  async list(): Promise<DDDs[]> {
    const list = await this.repository.find({
      cache: { id: "listDDDs", milliseconds: 1000000 },
    });

    return list;
  }
  async findByDDDs(origem: string, destino: string): Promise<DDDs> {
    const call = await this.repository
      .createQueryBuilder("c")
      .where("origem = :origem", { origem })
      .andWhere("destino = :destino", { destino });

    const ddds = await call.getOne();

    return ddds;
  }
}

export { DDDsRepository };
