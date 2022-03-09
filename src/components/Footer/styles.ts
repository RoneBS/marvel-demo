import styled from 'styled-components'

export const MainFooter = styled.footer`
  max-width: 100%;
  height: 320px;
  display: flex;
  justify-content: space-around;
  background: var(--black);
  margin-top: 50px;
  padding: 6rem;
`

export const LogoImg = styled.img`
  width: 150px;
  height: 120px;
`

export const ExternalPages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  a {
    font-size: 1.3rem;
    font-weight: 600;
    text-decoration: none;
    color: var(--white);
  }
`

export const MarvelProds = styled.div`
  .prods-container {
    display: flex;
    align-items: center;

    img {
      width: 54px;
      height: 22px;
    }

    div {
      padding-left: 15px;

      span {
        font-size: 1.3rem;
        font-weight: 700;
        text-decoration: none;
        color: var(--white);
      }

      p {
        font-size: 1.4rem;
        color: var(--gray);
      }
    }

    & + div {
      margin-top: 1.2rem;
    }
  }
`

export const SocialMedia = styled.div`
  span {
    font-size: 1.3rem;
    font-weight: 700;
    text-decoration: none;
    color: var(--white);
  }

  div {
    width: 140px;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;

    svg {
      color: gray;
      transition: color 0.2s;

      &:hover {
        color: var(--white);
      }
    }
  }
`
