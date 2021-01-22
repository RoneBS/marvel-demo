import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Banner } from './style';

const Character: React.FC = () => {
  return (
    <>
      <Header />
      <Banner />
      <Footer />
    </>
  );
};

export default Character;
