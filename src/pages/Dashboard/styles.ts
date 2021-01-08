import styled from 'styled-components';

export const Section = styled.div`
  width: 100%;
  height: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  p {
    color: white;
    font-size: 24px;
    position: absolute;
    padding-right: 600px;
  }

  img {
    width: 100%;
    height: 420px;
  }
`;

export const Title = styled.h1`
  display: flex;
  margin-top: 40px;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 30px;
    color: black;
  }
`;

export const Card = styled.div`
  display: flex;
  div {
    display: flex;
    justify-content: center;
    width: 350px;
    height: 400px;
    margin: 50px;
    border-radius: 40px;
    box-shadow: 2px 2px 22px rgba(0, 0, 0, 0.2);
    background-color: grey;

    img {
      width: 450px;
      height: 250px;
      border-radius: 40px;
      background-color: white;
    }
  }
`;
