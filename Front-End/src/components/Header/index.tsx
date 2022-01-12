import React from 'react';

import logoImg from '../../assets/vrtx.png';
import api from '../../services/api';
import { IHeaderProps } from '../../types/types';
import { Container, Content } from './styles';

export const Header = ({
  origemddd,
  destinoddd,
  setCalculo,
  plano,
  minutos,
}: IHeaderProps) => {
  const paylaod = {
    origem: origemddd,
    destino: destinoddd,
    minutos,
    nome: plano,
  };

  const calculaValor = async () => {
    try {
      if (origemddd === '' || destinoddd === '' || plano === '' || !minutos) {
        // '' ao invés de !var
        // eslint-disable-next-line no-alert
        alert('Preencha os campos');
      }

      if (
        origemddd !== '011' &&
        destinoddd !== '011' &&
        origemddd !== destinoddd &&
        origemddd &&
        destinoddd
      ) {
        // eslint-disable-next-line no-alert
        alert('Opção Inválida');
      }

      if (origemddd === destinoddd && origemddd !== '' && destinoddd !== '') {
        // eslint-disable-next-line no-alert
        alert('DDDs iguais');
      }

      await api.post('/price', paylaod).then((response) => {
        setCalculo(response.data);
      });
    } catch (err) {
      console.error(`ops! ocorreu um erro${err}`);
    }
  };

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="vxtel" />
        <p>VxTel</p>
        <button onClick={calculaValor}>Calcular Ligação</button>
      </Content>
    </Container>
  );
};
