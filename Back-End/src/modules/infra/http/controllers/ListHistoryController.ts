import { ListHistoryUseCase } from "@modules/services/ListHistoryUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

class ListHistoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listHistoryUseCase = container.resolve(ListHistoryUseCase);
    const all = await listHistoryUseCase.execute();
    return response.json(all);
  }
}

export { ListHistoryController };
