import React from 'react';

import {
  ILabelMinutesProps,
  ISelectionDDDProps,
  ISelectionPlanProps,
} from '../../types/types';

export const SelectionDDD = ({ ddd, setDDD }: ISelectionDDDProps) => {
  return (
    <div>
      <select
        className="1"
        name="DDD"
        value={ddd}
        onChange={(event) => setDDD(event.target.value)}
      >
        <option value="">Selecione</option>
        <option value="011">011</option>
        <option value="016">016</option>
        <option value="017">017</option>
        <option value="018">018</option>
      </select>
    </div>
  );
};

export const SelectionPlan = ({ plano, setPlano }: ISelectionPlanProps) => {
  return (
    <div>
      <select
        className="2"
        name="DDD"
        value={plano}
        onChange={(event) => setPlano(event.target.value)}
      >
        <option value="">Selecione</option>
        <option value="FaleMais 30">FaleMais 30</option>
        <option value="FaleMais 60">FaleMais 60</option>
        <option value="FaleMais 120">FaleMais 120</option>
      </select>
    </div>
  );
};

export const LabelMinutes = ({ minutos, setMinutos }: ILabelMinutesProps) => {
  return (
    <div>
      <label>
        <input
          name="Minutos"
          type="number"
          min="1"
          max="999"
          value={minutos}
          onChange={(event) => setMinutos(parseInt(event.target.value, 10))}
        />
      </label>
    </div>
  );
};
