import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
`

export const BannerSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const NewsBox = styled.div`
  width: 40vw;
  height: 35vh;
  position: absolute;
  top: 280px;
  left: 10rem;
  text-align: center;
`
export const TitleSection = styled.div`
  width: 100%;
  padding: 18px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Title = styled.h1`
  font-size: 3rem;
`

export const HeroBanner = styled.img`
  display: block;
  max-width: 100%;
`

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  /* margin-top: 50px; */
`

export const HeroCard = styled.div`
  width: 220px;
  height: 310px;
  display: flex;
  flex-direction: column;
  background: var(--red);
  margin: 10px;
  border: 2px solid var(--black);
  border-radius: 4px 4px 4px 4px;
  box-shadow: 2px 10px 3px rgba(0, 0, 0, 0.2);

  div {
    background: var(--black);
    padding: 12px;
    text-align: center;

    span {
      font-size: 2rem;
    }
  }
`

export const HeroImg = styled.img`
  display: block;
  width: 216px;
  height: 250px;
`
export const CharName = styled.h2`
  font-size: 2rem;
  color: var(--white);
`
