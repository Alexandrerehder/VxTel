import { DDDs } from "@modules/infra/typeorm/entities/DDDs";
import { IDDDsRepository } from "@modules/repositories/IDDDsRepository";
import { IHistoryRepository } from "@modules/repositories/IHistoryRepository";
import { IPlanosRepository } from "@modules/repositories/IPlanosRepository";
import { inject, injectable } from "tsyringe";

import { ICalculatorProvider } from "@shared/container/providers/CalculatorProvider/ICalculatorProvider";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  origem: string;
  destino: string;
  minutos: number;
  nome?: string;
}

@injectable()
class CallPriceUseCase {
  constructor(
    // constructor + private atribute - to access this. and all of ISpecificationsRepository's methods and vars
    @inject("DDDsRepository")
    private dddsRepository: IDDDsRepository,
    @inject("PlanosRepository")
    private planosRepository: IPlanosRepository,
    @inject("CalculatorProvider")
    private calculatorProvider: ICalculatorProvider,
    @inject("HistoryRepository")
    private historyRepository: IHistoryRepository
  ) {}

  calls: DDDs[] = [];

  async execute({ origem, destino, minutos, nome }: IRequest): Promise<DDDs> {
    const callResume = new DDDs();

    if (origem === destino) {
      throw new AppError("DDD's are the same");
    }

    const result = await this.dddsRepository.findByDDDs(origem, destino);
    const plan = await this.planosRepository.findByName(nome);

    if (!result) {
      throw new AppError("Invalid Option");
    }

    if (!plan) {
      throw new AppError("DDD or Plan not available!");
    }

    const semPlano = this.calculatorProvider.withoutPlan(
      result.tarifa,
      minutos
    );

    const comPlano = this.calculatorProvider.withPlan(
      result.tarifa,
      minutos,
      plan.tempo
    );

    Object.assign(callResume, {
      ...result,
      minutos,
      nome,
      preco: {
        semPlano,
        comPlano,
      },
    });

    this.calls.push(callResume);

    await this.historyRepository.create({
      origem: result.origem,
      destino: result.destino,
      plano: plan.nome,
      minutos,
      semPlano,
      comPlano,
    });

    return callResume;
  }
}

export { CallPriceUseCase };
