import React from 'react';

import Header from '../../components/Header';

import sectionImg from '../../assets/wolverine.jpeg';
import wolvImg from '../../assets/wolverine-card.jpeg';
import cicImg from '../../assets/ciclope-card.jpeg';
import magImg from '../../assets/magneto-card.jpeg';

import { Section, Title, Card } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Section>
        <p>
          Wolverine the imortal hero:
          <br />
          new commics from this summer
        </p>
        <img src={sectionImg} alt="wolverine" />
      </Section>
      <Title>
        <h1>Choose your Hero</h1>
      </Title>
      <Card>
        <div>
          <img src={wolvImg} alt="" />
        </div>
        <div>
          <img src={cicImg} alt="" />
        </div>
        <div>
          <img src={magImg} alt="" />
        </div>
      </Card>
    </>
  );
};

export default Dashboard;
