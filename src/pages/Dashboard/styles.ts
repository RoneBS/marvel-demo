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
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    width: 210px;
    height: 400px;
    margin-top: 40px;
    box-shadow: 2px 2px 22px rgba(0, 0, 0, 0.2);
    background-color: red;

    img {
      width: 210px;
      height: 350px;
      background-color: white;
    }

    h1 {
      position: absolute;
      color: white;
      margin: 265px 0px 0px 15px;
      font-size: 18px;
      text-decoration: none;
    }

    section {
      width: 100%;
      height: 200px;
      margin-top: 5px;
      background-color: black;
    }
  }
`;
