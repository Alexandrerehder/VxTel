import { ListPlanosUseCase } from "@modules/services/ListPlanosUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

class ListPlanosController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listDDDsUseCase = container.resolve(ListPlanosUseCase);

    const all = await listDDDsUseCase.execute();

    return response.json(all);
  }
}

export { ListPlanosController };
