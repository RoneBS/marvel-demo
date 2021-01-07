import styled from 'styled-components';

export const Navbar = styled.h1`
  width: 100%;
  height: 20px;

  ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
  }

  li {
    float: left;
    font-size: 18px;
  }

  img {
    width: 100px;
  }

  a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;

    &:hover {
      background-color: red;
    }
  }
`;

export const Form = styled.form`
  max-width: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    width: 100px;
    height: 35px;
    color: white;
    background-color: red;
    border: none;
    border-radius: 3px;
    margin-left: 5px;
    margin-right: 15px;

    &:hover {
      background-color: #d72323;
    }
  }
`;
