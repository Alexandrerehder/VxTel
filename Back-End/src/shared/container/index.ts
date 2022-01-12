import { DDDsRepository } from "@modules/infra/typeorm/repositories/DDDsRepository";
import { HistoryRepository } from "@modules/infra/typeorm/repositories/HistoryRepository";
import { PlanosRepository } from "@modules/infra/typeorm/repositories/PlanosRepository";
// eslint-disable-next-line import-helpers/order-imports
import { IDDDsRepository } from "@modules/repositories/IDDDsRepository";
import { IHistoryRepository } from "@modules/repositories/IHistoryRepository";
import { IPlanosRepository } from "@modules/repositories/IPlanosRepository";

import { container } from "tsyringe";

import { ICalculatorProvider } from "./providers/CalculatorProvider/ICalculatorProvider";
import { CalculatorProvider } from "./providers/CalculatorProvider/implementations/CalculatorProvider";

container.register<IDDDsRepository>("DDDsRepository", DDDsRepository);

container.register<IPlanosRepository>("PlanosRepository", PlanosRepository);

container.register<IHistoryRepository>("HistoryRepository", HistoryRepository);

container.register<ICalculatorProvider>(
  "CalculatorProvider",
  CalculatorProvider
);
