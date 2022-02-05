import React, { useState, useRef } from 'react';
import Select from 'react-select';
import { toast } from 'react-toastify';

import api from '#services/axios.js';

import { formatPrice } from '#utils/format-numbers-util.js';

import landingPageImage from '#assets/img/landing-page.png';
import talkMore120Img from '#assets/img/talkMore120Img.png';
import talkMore30Img from '#assets/img/talkMore30Img.png';
import talkMore60Img from '#assets/img/talkMore60Img.png';

import Footer from '#pages/_layouts/footer-layout.js';

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
} from './simulation-page-style.js';

export default function SimulationPage() {
  const areaCodes = [
    { value: '011', label: '011' },
    { value: '016', label: '016' },
    { value: '017', label: '017' },
    { value: '018', label: '018' },
  ];

  const [stateAreaCodeOrigin, setStateAreaCodeOrigin] = useState([]);
  const [stateAreaCodeDestiny, setStateAreaCodedDestiny] = useState([]);
  const [stateCallDuration, setStateCallDuration] = useState([]);
  const [statePrices, setStatePrices] = useState([]);
  const [stateSimulation, setStateSimulation] = useState(false);

  const simulationSection = useRef();
  const pricePlansSection = useRef();

  const handleChangeAreaCodeOrigin = (selectedOption) => {
    setStateAreaCodeOrigin(selectedOption);
  };
  const handleChangeAreaCodeDestiny = (selectedOption) => {
    setStateAreaCodedDestiny(selectedOption);
  };
  const handleChangeCallDuration = (callDuration) => {
    setStateCallDuration({ value: callDuration.target.value });
  };
  const handleSimulation = () => {
    setStateSimulation(true);
  };

  const handlePrice = async () => {
    try {
      const response = await api.post('/simulation', {
        areaCodeOrigin: stateAreaCodeOrigin.value,
        areaCodeDestiny: stateAreaCodeDestiny.value,
        callDuration: stateCallDuration.value,
      });

      const { data } = response;
      setStatePrices(data);
      pricePlansSection.current.scrollIntoView();
    } catch (error) {
      setStateSimulation(false);
      toast.error('Fee not registered for the area codes informed');
    }
  };

  return (
    <>
      <Header />
      <Container style={{ height: 1000 }}>
        <AboutPlan>
          <h1>Fale muito +</h1>
          <h1>Pague muito -</h1>
          <p>
            Com os planos pré-pagos da Telzir, você fala o quanto quiser com um
            plano fixo, e só paga os minutos excedentes
          </p>
          <Button onClick={() => simulationSection.current.scrollIntoView()}>
            Simular Planos
          </Button>
        </AboutPlan>
        <img src={landingPageImage} />
      </Container>

      <SectionSimulation ref={simulationSection}>
        <h1>Informe os dados da ligação</h1>
        <AreaCodes>
          <SelectCode>
            <span>DDD de Origem:</span>
            <Select
              value={stateAreaCodeOrigin}
              options={areaCodes}
              onChange={handleChangeAreaCodeOrigin}
              placeholder="DDD"
            />
          </SelectCode>

          <SelectCode>
            <label>DDD de Destino:</label>
            <Select
              value={stateAreaCodeDestiny}
              options={areaCodes}
              onChange={handleChangeAreaCodeDestiny}
              placeholder="DDD"
            />
          </SelectCode>
        </AreaCodes>

        <label>Duração em minutos:</label>
        <Duration
          type="number"
          placeholder="0 min"
          min="0"
          onChange={handleChangeCallDuration}
        />

        <button
          type="button"
          onClick={() => {
            handleSimulation();
            handlePrice();
          }}
        >
          Simular
        </button>
      </SectionSimulation>

      <Container ref={pricePlansSection}>
        <CardGroup simulation={stateSimulation}>
          <Card simulation={stateSimulation}>
            <img src={talkMore30Img} />
            <h2>FaleMais30</h2>

            <div simulation={stateSimulation}>
              <h3>De {formatPrice(statePrices.withoutTalkMore)}, por</h3>
              <h1>{formatPrice(statePrices.talkMore30)}</h1>

              <p>
                Com o plano FaleMais30, você fala por 30 minutos e só paga{' '}
                {formatPrice(statePrices.fee)} + 10% pelos minutos excedentes
                através dos DDD's {stateAreaCodeOrigin.value} e{' '}
                {stateAreaCodeDestiny.value}
              </p>

              <Button>Contratar Agora</Button>
              <span>Tarifas de {formatPrice(statePrices.fee)} + 10%</span>
            </div>
          </Card>

          <Card simulation={stateSimulation}>
            <img src={talkMore60Img} />
            <h2>FaleMais60</h2>

            <div simulation={stateSimulation}>
              <h3>De {formatPrice(statePrices.withoutTalkMore)} por</h3>
              <h1>{formatPrice(statePrices.talkMore60)}</h1>

              <p>
                Com o plano FaleMais60, você fala por 60 minutos e só paga{' '}
                {formatPrice(statePrices.fee)} + 10% pelos minutos excedentes
                através dos DDD's {stateAreaCodeOrigin.value} e{' '}
                {stateAreaCodeDestiny.value}
              </p>

              <Button>Contratar Agora</Button>
              <span>Tarifas de {formatPrice(statePrices.fee)} + 10%</span>
            </div>
          </Card>

          <Card simulation={stateSimulation}>
            <img src={talkMore120Img} />
            <h2>FaleMais120</h2>

            <div simulation={stateSimulation}>
              <h3> De {formatPrice(statePrices.withoutTalkMore)} por</h3>
              <h1>{formatPrice(statePrices.talkMore120)}</h1>

              <p>
                Com o plano FaleMais120, você fala por 120 minutos e só paga
                {formatPrice(statePrices.fee)} + 10% pelos minutos excedentes
                através dos DDD's {stateAreaCodeOrigin.value} e{' '}
                {stateAreaCodeDestiny.value}
              </p>

              <Button>Contratar Agora</Button>
              <span>Tarifas de {formatPrice(statePrices.fee)} + 10%</span>
            </div>
          </Card>
        </CardGroup>
      </Container>
      <Footer />
    </>
  );
}
