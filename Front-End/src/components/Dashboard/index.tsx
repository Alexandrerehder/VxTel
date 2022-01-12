import React from 'react';

import { ISummaryProps } from '../../types/types';
import { CalculationHistory } from '../CalculationHistory';
import { Summary } from '../Summary';
import { Container } from './styles';

export function Dashboard({
  origem,
  destino,
  valComPlano,
  valSemPlano,
  historico,
  plano,
  minutos,
}: ISummaryProps) {
  return (
    <Container>
      <Summary
        destino={destino}
        origem={origem}
        valComPlano={valComPlano}
        valSemPlano={valSemPlano}
        plano={plano}
        minutos={minutos}
      />

      <CalculationHistory historico={historico} />
    </Container>
  );
}
