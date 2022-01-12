interface ICreateHistoryDTO {
  id?: string;
  origem: string;
  destino: string;
  plano: string;
  minutos: number;
  semPlano: number;
  comPlano: number;
}

export { ICreateHistoryDTO };
