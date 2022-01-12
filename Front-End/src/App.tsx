import React, { useEffect, useState } from 'react';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { recuperaHistorico } from './services/historyService';
import { GlobalStyle } from './styles/global';
import { ICalculoResp, IHistoricoResp } from './types/types';

export default function App() {
  const [calc, setCalculo] = useState<ICalculoResp>();
  const [hist, setHist] = useState<IHistoricoResp[]>();
  const [origemddd, setOrigemDDD] = useState('');
  const [destinoddd, setDestinoDDD] = useState('');
  const [plano, setPlano] = useState('');
  const [minutos, setMinutos] = useState(0);

  useEffect(() => {
    recuperaHistorico({ historico: hist, setHistorico: setHist });
  }, [calc]);

  return (
    <>
      <Header
        setCalculo={setCalculo}
        destinoddd={destinoddd}
        origemddd={origemddd}
        plano={plano}
        minutos={minutos}
      />
      <Dashboard
        valSemPlano={calc?.preco?.semPlano}
        valComPlano={calc?.preco?.comPlano}
        origem={{ ddd: origemddd, setDDD: setOrigemDDD }}
        destino={{ ddd: destinoddd, setDDD: setDestinoDDD }}
        plano={{ plano, setPlano }}
        minutos={{ minutos, setMinutos }}
        historico={hist}
      />
      <GlobalStyle />
    </>
  );
}
