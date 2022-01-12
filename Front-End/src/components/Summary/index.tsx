import React from 'react';

import originCall from '../../assets/Entradas.svg';
import assign from '../../assets/plano.png';
import watch from '../../assets/relogio.png';
import destinyCall from '../../assets/Saidas.svg';
import total from '../../assets/Total.svg';
import { ISummaryProps } from '../../types/types';
import { SelectionDDD, LabelMinutes, SelectionPlan } from '../Selection';
import { Container } from './styles';

export function Summary({
  origem,
  destino,
  valSemPlano,
  valComPlano,
  plano,
  minutos,
}: ISummaryProps) {
  return (
    <Container>
      <div>
        <header className="first">
          <p>Origem</p>
          <img src={originCall} alt="Origem" />
          <SelectionDDD ddd={origem.ddd} setDDD={origem.setDDD} />
        </header>
        <header className="second">
          <p className="second">Destino</p>
          <img src={destinyCall} alt="Destino" className="second" />
          <SelectionDDD ddd={destino.ddd} setDDD={destino.setDDD} />
        </header>
      </div>

      <div className="teste">
        <header className="plano">
          <p>Planos</p>
          <img src={assign} alt="Plano" />
          <SelectionPlan plano={plano.plano} setPlano={plano.setPlano} />
        </header>
        <header className="minutos">
          <p>Minutos</p>
          <img src={watch} alt="Minutos" />
          <LabelMinutes
            minutos={minutos.minutos}
            setMinutos={minutos.setMinutos}
          />
        </header>
      </div>
      <div className="highlight-background">
        <header>
          <strong>
            <p className="total">Total</p>
          </strong>
          <img src={total} alt="Destino" />
        </header>
        <strong>
          <p>Com plano: R$ {valComPlano}</p>
          <p>Sem plano: R$ {valSemPlano}</p>
        </strong>
      </div>
    </Container>
  );
}
