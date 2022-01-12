import { DDDs } from "@modules/infra/typeorm/entities/DDDs";
import { IDDDsRepository } from "@modules/repositories/IDDDsRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListDDDsUseCase {
  constructor(
    @inject("DDDsRepository")
    private dddsRepository: IDDDsRepository
  ) {}

  async execute(): Promise<DDDs[]> {
    const ddds = await this.dddsRepository.list();

    return ddds;
  }
}

export { ListDDDsUseCase };
