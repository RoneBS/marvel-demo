import GlobalStyle from '../../styles/global'
import * as S from './styles'

import heroBanner from '../../assets/wolverine.jpeg'
import xmemLogo from '../../assets/Xmencomic-logo.svg'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { useCharacters } from '../../hooks/useCharacters'

export const Home = () => {
  const characters = useCharacters()
  return (
    <>
      <S.Wrapper>
        <Header></Header>
        <S.BannerSection>
          <S.NewsBox>
            <img src={xmemLogo} alt="" />
          </S.NewsBox>
          <S.HeroBanner src={heroBanner} alt="Wolverine" />
        </S.BannerSection>
        <S.TitleSection>
          <S.Title>Choose Your Hero</S.Title>
        </S.TitleSection>
        <S.Main>
          {characters.map((character) => (
            <S.HeroCard key={character.id}>
              <S.HeroImg
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              />
              <div>
                <S.CharName>{character.name}</S.CharName>
              </div>
            </S.HeroCard>
          ))}
        </S.Main>
      </S.Wrapper>
      <Footer />
      <GlobalStyle />
    </>
  )
}
