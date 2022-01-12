import { DDDsRepository } from "@modules/infra/typeorm/repositories/DDDsRepository";
import { HistoryRepository } from "@modules/infra/typeorm/repositories/HistoryRepository";
import { PlanosRepository } from "@modules/infra/typeorm/repositories/PlanosRepository";
import { IHistoryRepository } from "@modules/repositories/IHistoryRepository";
import { createConnection } from "typeorm";

import { CalculatorProvider } from "@shared/container/providers/CalculatorProvider/implementations/CalculatorProvider";
import { AppError } from "@shared/errors/AppError";

import { CallPriceUseCase } from "./CallPriceUseCase";

let callPriceUseCase: CallPriceUseCase;
let calculatorProvider: CalculatorProvider;
let dddsRepository: DDDsRepository;
let planosRepository: PlanosRepository;
let historyRepository: IHistoryRepository;

describe("Call Calculation", () => {
  beforeAll(async () => {
    await createConnection();

    calculatorProvider = new CalculatorProvider();
    planosRepository = new PlanosRepository();
    dddsRepository = new DDDsRepository();
    historyRepository = new HistoryRepository();

    callPriceUseCase = new CallPriceUseCase(
      dddsRepository,
      planosRepository,
      calculatorProvider,
      historyRepository
    );
  });

  it("should be able call to another ddd", async () => {
    const resume = await callPriceUseCase.execute({
      origem: "011",
      destino: "017",
      minutos: 120,
      nome: "FaleMais 60",
    });
    expect(resume).toHaveProperty("id");
  });

  it("should not be able call to the same ddd", async () => {
    await expect(
      callPriceUseCase.execute({
        origem: "011",
        destino: "011",
        minutos: 30,
        nome: "FaleMais 60",
      })
    ).rejects.toEqual(new AppError("DDD's are the same"));
  });

  it("should not be able call to an unknown ddd", async () => {
    await expect(
      callPriceUseCase.execute({
        origem: "011",
        destino: "01777",
        minutos: 30,
        nome: "FaleMais 60",
      })
    ).rejects.toEqual(new AppError("Invalid Option"));
  });

  it("should not be able call choose an unknown plan", async () => {
    await expect(
      callPriceUseCase.execute({
        origem: "011",
        destino: "017",
        minutos: 30,
        nome: "FaleMais 180",
      })
    ).rejects.toEqual(new AppError("DDD or Plan not available!"));
  });
});
