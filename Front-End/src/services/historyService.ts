import { IHistoryProps } from '../types/types';
import api from './api';

export const recuperaHistorico = async ({ setHistorico }: IHistoryProps) => {
  try {
    await api.get('/history').then((response) => {
      setHistorico(response.data);
    });
  } catch (err) {
    console.error(`ops! ocorreu um erro${err}`);
  }
};
