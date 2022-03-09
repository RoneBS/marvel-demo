import * as S from './styles'

import imgLogo from '../../assets/m-logo.png'
import imgInsider from '../../assets/insider-logo.png'
import imgUnlimited from '../../assets/unlimited-logo.png'

import {
  ImFacebook2,
  ImInstagram,
  ImTumblr,
  ImTwitter,
  ImYoutube
} from 'react-icons/im'

import { FaPinterest, FaSnapchatGhost } from 'react-icons/fa'

export const Footer = () => {
  return (
    <>
      <S.MainFooter>
        <S.LogoImg src={imgLogo} alt="marvel logo" />
        <S.ExternalPages>
          <a href="#">ABOUT MARVEL</a>
          <a href="#">HELP/FAQS</a>
          <a href="#">CAREERS</a>
          <a href="#">INTERNSHIPS</a>
        </S.ExternalPages>
        <S.ExternalPages>
          <a href="#">ADVERSING</a>
          <a href="#">DISNEY+</a>
          <a href="#">MARVELHQ.COM</a>
          <a href="#">
            FREEDOM DIGITAL <br /> COMICS
          </a>
        </S.ExternalPages>
        <S.MarvelProds>
          <div className="prods-container">
            <img src={imgInsider} alt="marvel insider logo" />
            <div>
              <span>MARVEL INSIDER</span>
              <p>Get Rewarded for Being a Marvel Fan</p>
            </div>
          </div>
          <div className="prods-container">
            <img src={imgUnlimited} alt="marvel unlimited logo" />
            <div>
              <span>MARVEL Unlimited</span>
              <p>Access Over 29,000+ Digital Comics</p>
            </div>
          </div>
        </S.MarvelProds>
        <S.SocialMedia>
          <span>FOLLOW MARVEL</span>
          <div>
            <ImFacebook2 size={'24px'} />
            <ImTwitter size={'24px'} />
            <ImInstagram size={'24px'} />
            <ImYoutube size={'24px'} />
            <ImTumblr size={'24px'} />
            <FaSnapchatGhost size={'24px'} />
            <FaPinterest size={'24px'} />
          </div>
        </S.SocialMedia>
      </S.MainFooter>
    </>
  )
}
