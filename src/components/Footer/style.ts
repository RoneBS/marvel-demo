import styled from 'styled-components';

export const MainFooter = styled.footer`
  display: flex;
  width: 100%;
  height: 340px;
  margin-top: 20px;
  background-color: black;

  div {
    display: flex;
    align-items: center;

    img {
      margin-top: 20px;
    }
  }
`;

export const List = styled.nav`
  width: 300px;
  height: 300px;
  margin-top: 170px;

  ul {
    text-decoration: none;

    li {
      text-decoration: none;
      list-style: none;
      margin-bottom: 10px;
      color: white;
    }
  }
`;
