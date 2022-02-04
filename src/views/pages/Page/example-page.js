import React, { useState } from 'react';
import Select from 'react-select';

import api from '#services/axios.js';

import { formatPrice } from '#utils/format-numbers-util.js';

import faleMais120 from '#assets/img/faleMais120.png';
import faleMais30 from '#assets/img/faleMais30.png';
import faleMais60 from '#assets/img/faleMais60.png';
import landingPageImage from '#assets/img/landing-page.png';
import minus from '#assets/img/minus-01.png';
import plus from '#assets/img/plus-01.png';

import Button from '#components/globals/Button/button-component.js';
import Header from '#components/globals/Header/header-component.js';

import {
  Container,
  AboutPlan,
  Card,
  CardGroup,
  AreaCodes,
  SelectCode,
  SectionSimulation,
  Duration,
} from './example-page-style.js';

export default function ExamplePage() {
  const areaCodes = [
    { value: '011', label: '011' },
    { value: '016', label: '016' },
    { value: '017', label: '017' },
    { value: '018', label: '018' },
  ];

  const [stateOrigin, setStateOrigin] = useState([]);
  const [stateDestiny, setStateDestiny] = useState([]);
  const [stateDuration, setStateDuration] = useState([]);
  const [statePrices, setStatePrices] = useState([]);

  const handleChangeOrigin = (selectedOption) => {
    setStateOrigin(selectedOption);
  };
  const handleChangeDestiny = (selectedOption) => {
    setStateDestiny(selectedOption);
  };
  const handleChangeDuration = (duration) => {
    setStateDuration({ value: duration.target.value });
  };

  const handlePrice = async () => {
    const response = await api.post('/simulation', {
      origin: stateOrigin.value,
      destiny: stateDestiny.value,
      duration: stateDuration.value,
    });
    const { data } = response;
    setStatePrices(data);
  };
  return (
    <>
      <Header />
      <Container>
        <AboutPlan>
          <h1>
            Fale muito <img src={plus} />
          </h1>
          <h1>
            Pague muito
            <img src={minus} />
          </h1>
          <p>
            Com os planos pré-pagos da Telzir, você fala o quanto quiser e só
            paga os minutos excedentes
          </p>
          <Button>Simular Planos</Button>
        </AboutPlan>
        <img src={landingPageImage} />
      </Container>
      <SectionSimulation>
        <h1>Informe os dados da ligação</h1>
        <AreaCodes>
          <SelectCode>
            <label>DDD de Origem</label>
            <Select
              value={stateOrigin}
              options={areaCodes}
              onChange={handleChangeOrigin}
            />
          </SelectCode>
          <SelectCode>
            <label>DDD de Destino</label>
            <Select
              value={stateDestiny}
              options={areaCodes}
              onChange={handleChangeDestiny}
            />
          </SelectCode>
        </AreaCodes>
        <label>Duração em minutos</label>
        <Duration
          type="number"
          placeholder="0 min"
          min="0"
          onChange={handleChangeDuration}
        />
        <button type="button" onClick={() => handlePrice()}>
          Simular
        </button>
      </SectionSimulation>
      <Container>
        <CardGroup>
          <Card>
            <img src={faleMais30} />
            <h2>FaleMais30</h2>
            <h3>De {formatPrice(statePrices.valueWithoutTalkMore)}, por</h3>
            <h1>{formatPrice(statePrices.valueTalkMore30)}</h1>
            <p>
              Com o plano FaleMais30, você fala por 30 minutos e só paga{' '}
              {formatPrice(statePrices.tax)} + 10% pelos minutos excedentes
              através dos DDD's {stateOrigin.value} e {stateDestiny.value}
            </p>
            <Button>Contratar Agora</Button>
            <span>Tarifas de {formatPrice(statePrices.tax)} + 10%</span>
          </Card>
          <Card>
            <img src={faleMais60} />
            <h2>FaleMais60</h2>

            <h3>De {formatPrice(statePrices.valueWithoutTalkMore)} por</h3>
            <h1>{formatPrice(statePrices.valueTalkMore60)}</h1>
            <p>
              Com o plano FaleMais60, você fala por 60 minutos e só paga{' '}
              {formatPrice(statePrices.tax)} + 10% pelos minutos excedentes
              através dos DDD's {stateOrigin.value} e {stateDestiny.value}
            </p>
            <Button>Contratar Agora</Button>
            <span>Tarifas de {formatPrice(statePrices.tax)} + 10%</span>
          </Card>
          <Card>
            <img src={faleMais120} />
            <h2>FaleMais120</h2>

            <h3> De {formatPrice(statePrices.valueWithoutTalkMore)} por</h3>
            <h1>{formatPrice(statePrices.valueTalkMore120)}</h1>
            <p>
              Com o plano FaleMais120, você fala por 120 minutos e só paga
              {formatPrice(statePrices.tax)} + 10% pelos minutos excedentes
              através dos DDD's {stateOrigin.value} e {stateDestiny.value}
            </p>
            <Button>Contratar Agora</Button>
            <span>Tarifas de {formatPrice(statePrices.tax)} + 10%</span>
          </Card>
        </CardGroup>
      </Container>
    </>
  );
}
