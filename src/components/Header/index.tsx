import React from 'react';

import logoImg from '../../assets/marvel-logo.svg';

import { Navbar, Form } from './styles';

const Header: React.FC = () => {
  return (
    <>
      <Navbar>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <img src={logoImg} alt="Marvel logo" />
          <Form>
            <input type="text" id="fname" name="fname" />
            <button type="submit">Search</button>
          </Form>
        </ul>
      </Navbar>
    </>
  );
};

export default Header;
