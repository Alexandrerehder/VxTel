import { Dispatch, SetStateAction } from 'react';

export interface ICalculoResp {
  id: string;
  origem: string;
  destino: string;
  minutos: number;
  nome: string;
  preco: {
    semPlano: number;
    comPlano: number;
  };
}

export interface ISelectionDDDProps {
  ddd: string;
  setDDD: Dispatch<SetStateAction<string>>;
}

export interface ISelectionPlanProps {
  plano: string;
  setPlano: Dispatch<SetStateAction<string>>;
}

export interface ILabelMinutesProps {
  minutos: number;
  setMinutos: Dispatch<SetStateAction<number>>;
}

export interface IHistoricoResp {
  id: string;
  origem: string;
  destino: string;
  comPlano: number | undefined;
  semPlano: number | undefined;
  plano: string;
  minutos: number;
}

export interface IHistoryProps {
  historico: IHistoricoResp[] | undefined;
  setHistorico: Dispatch<SetStateAction<IHistoricoResp[] | undefined>>;
}

export interface ISummaryProps {
  valComPlano: number | undefined;
  valSemPlano: number | undefined;
  origem: ISelectionDDDProps;
  destino: ISelectionDDDProps;
  historico?: IHistoricoResp[];
  plano: ISelectionPlanProps;
  minutos: ILabelMinutesProps;
}

export interface ICalculationHistoryProps {
  historico?: IHistoricoResp[];
}

export interface IHeaderProps {
  origemddd: string;
  destinoddd: string;
  plano: string;
  minutos: number;
  setCalculo: Dispatch<SetStateAction<ICalculoResp | undefined>>;
}
