interface ICalculatorProvider {
  withoutPlan(tarifa: number, minutos: number): number;
  withPlan(tarifa: number, minutos: number, nome?: number): number;
}

export { ICalculatorProvider };
