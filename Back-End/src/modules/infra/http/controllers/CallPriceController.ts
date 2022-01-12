import { CallPriceUseCase } from "@modules/services/CallPriceUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

class CallPriceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { origem, destino, minutos, nome } = request.body;
    console.log(request.body);
    const callPriceUseCase = container.resolve(CallPriceUseCase);

    const call = await callPriceUseCase.execute({
      origem,
      destino,
      minutos,
      nome,
    });

    return response.status(200).json(call);
  }
}

export { CallPriceController };
