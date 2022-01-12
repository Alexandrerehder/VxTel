import React from 'react';

import { ICalculationHistoryProps } from '../../types/types';
import { Container } from './styles';

export function CalculationHistory({ historico }: ICalculationHistoryProps) {
  const history = historico?.map((value) => {
    return (
      <tr key={value.id}>
        <td className="black-solid">{value.origem}</td>
        <td className="black-solid">{value.destino}</td>
        <td>{value.minutos}</td>
        <td>{value.plano}</td>
        <td className="black-solid">R$ {value.comPlano}</td>
        <td>R$ {value.semPlano}</td>
      </tr>
    );
  });

  return (
    <Container>
      <div>
        <strong>
          <p>Histórico de Consultas</p>
        </strong>
      </div>
      <table>
        <thead>
          <tr>
            <th>Origem</th>
            <th>Destino</th>
            <th>Minutos</th>
            <th>Plano</th>
            <th>Total com plano</th>
            <th>Total sem plano</th>
          </tr>
        </thead>
        <tbody>{history}</tbody>
      </table>
    </Container>
  );
}
