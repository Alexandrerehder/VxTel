import { ICalculatorProvider } from "../ICalculatorProvider";

class CalculatorProvider implements ICalculatorProvider {
  withoutPlan(tarifa: number, minutos: number): number {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const semPlano: any = (tarifa * minutos).toFixed(2);
    return semPlano;
  }
  withPlan(tarifa: number, minutos: number, tempo: number): number {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let comPlano: any;

    if (minutos < tempo) {
      comPlano = 0;
      return comPlano.toFixed(2);
    }

    const result = (minutos - tempo) * tarifa;

    comPlano = result * 0.1 + result;
    return comPlano.toFixed(2);
  }
}

export { CalculatorProvider };
