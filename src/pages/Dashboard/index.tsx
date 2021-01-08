import React from 'react';

import Header from '../../components/Header';

import sectionImg from '../../assets/wolverine.jpeg';

import { Section } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Section>
        <p>Wolverine the imortal hero: new commics from this summer</p>
        <img src={sectionImg} alt="wolverine" />
      </Section>
    </>
  );
};

export default Dashboard;
