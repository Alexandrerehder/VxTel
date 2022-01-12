import { Planos } from "@modules/infra/typeorm/entities/Planos";
import { IPlanosRepository } from "@modules/repositories/IPlanosRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListPlanosUseCase {
  constructor(
    @inject("PlanosRepository")
    private planosRepository: IPlanosRepository
  ) {}

  async execute(): Promise<Planos[]> {
    const planos = await this.planosRepository.list();

    return planos;
  }
}

export { ListPlanosUseCase };
