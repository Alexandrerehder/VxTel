import { IHistoryRepository } from "@modules/repositories/IHistoryRepository";
import { inject, injectable } from "tsyringe";

import { History } from "../infra/typeorm/entities/History";

@injectable()
class ListHistoryUseCase {
  constructor(
    @inject("HistoryRepository")
    private historyRepository: IHistoryRepository
  ) {}

  async execute(): Promise<History[]> {
    const history = await this.historyRepository.list();

    return history;
  }
}

export { ListHistoryUseCase };
