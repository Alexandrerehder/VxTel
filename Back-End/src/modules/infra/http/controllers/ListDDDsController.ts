import { ListDDDsUseCase } from "@modules/services/ListDDDsUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

class ListDDDsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listDDDsUseCase = container.resolve(ListDDDsUseCase);
    const all = await listDDDsUseCase.execute();
    return response.json(all);
  }
}

export { ListDDDsController };
