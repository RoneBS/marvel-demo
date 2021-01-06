import React from 'react';

import logoImg from '../../assets/marvel-logo.svg';

import { Navbar } from './styles';

const Header: React.FC = () => {
  return (
    <>
      <Navbar>
        <img src={logoImg} alt="Marvel logo" />
      </Navbar>
    </>
  );
};

export default Header;
